// 웨딩 청첩장 메인 JavaScript 파일

// 전역 변수
let map = null;
let weddingDate = new Date('2025-10-18T14:00:00'); // 결혼식 날짜 및 시간
let currentPage = 'main';

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * 애플리케이션 초기화
 */
function initializeApp() {
    showLoadingSpinner();
    
    // 각 기능 초기화
    initializeDdayCounter();
    initializeMap();
    initializeImageLazyLoading();
    initializeGalleryModal();
    
    // 로딩 완료 후 스피너 숨기기
    setTimeout(() => {
        hideLoadingSpinner();
    }, 1000);
}

/**
 * D-Day 카운터 초기화
 */
function initializeDdayCounter() {
    const ddayElement = document.getElementById('d-day-text');
    if (!ddayElement) return;
    
    const today = new Date();
    const timeDiff = weddingDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    if (daysDiff > 0) {
        ddayElement.textContent = `D-${daysDiff}`;
    } else if (daysDiff === 0) {
        ddayElement.textContent = 'D-Day';
    } else {
        ddayElement.textContent = `D+${Math.abs(daysDiff)}`;
    }
}

/**
 * 카카오 지도 초기화
 */
function initializeMap() {
    // 카카오 지도 API 키가 설정되어 있는지 확인
    if (typeof kakao === 'undefined') {
        console.warn('카카오 지도 API가 로드되지 않았습니다. API 키를 확인해주세요.');
        return;
    }
    
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    
    // 지도 중심 좌표 (서울 웨딩홀 예시)
    const mapOption = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울시청 좌표
        level: 3
    };
    
    // 지도 생성
    map = new kakao.maps.Map(mapContainer, mapOption);
    
    // 마커 생성
    const marker = new kakao.maps.Marker({
        position: mapOption.center
    });
    
    // 마커를 지도에 표시
    marker.setMap(map);
    
    // 인포윈도우 생성
    const infowindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:10px; text-align:center; font-weight:bold;">서울 웨딩홀 3층 그랜드홀</div>'
    });
    
    // 마커 클릭 이벤트
    kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

/**
 * 네비게이션 앱 열기
 * @param {string} app - 앱 종류 ('kakao', 'tmap', 'naver')
 */
function openNavigation(app) {
    const destination = '서울특별시 강남구 테헤란로 123'; // 실제 주소로 변경 필요
    const latitude = 37.5665; // 실제 위도로 변경 필요
    const longitude = 126.9780; // 실제 경도로 변경 필요
    
    let url = '';
    
    switch (app) {
        case 'kakao':
            url = `kakaomap://route?sp=&ep=${latitude},${longitude}&by=CAR`;
            break;
        case 'tmap':
            url = `tmap://route?goalx=${longitude}&goaly=${latitude}&goalname=${encodeURIComponent(destination)}`;
            break;
        case 'naver':
            url = `nmap://route/car?dlat=${latitude}&dlng=${longitude}&dname=${encodeURIComponent(destination)}`;
            break;
        default:
            console.error('지원하지 않는 네비게이션 앱입니다.');
            return;
    }
    
    // 앱이 설치되어 있지 않은 경우 웹으로 이동
    const fallbackUrl = `https://map.kakao.com/link/to/${destination},${latitude},${longitude}`;
    
    // 앱 열기 시도
    const link = document.createElement('a');
    link.href = url;
    link.click();
    
    // 2초 후 앱이 열리지 않으면 웹으로 이동
    setTimeout(() => {
        window.open(fallbackUrl, '_blank');
    }, 2000);
}

/**
 * 전화 걸기
 * @param {string} phoneNumber - 전화번호
 */
function callPhone(phoneNumber) {
    // 모바일 환경에서만 전화 걸기
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // 데스크톱에서는 클립보드에 복사
        copyToClipboard(phoneNumber);
        showToast('전화번호가 클립보드에 복사되었습니다.');
    }
}

/**
 * 갤러리 페이지 표시
 */
function showGallery() {
    const mainPage = document.getElementById('main-page');
    const galleryPage = document.getElementById('gallery-page');
    
    if (mainPage && galleryPage) {
        mainPage.classList.remove('active');
        galleryPage.classList.add('active');
        currentPage = 'gallery';
        
        // 페이지 상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * 메인 페이지 표시
 */
function showMain() {
    const mainPage = document.getElementById('main-page');
    const galleryPage = document.getElementById('gallery-page');
    
    if (mainPage && galleryPage) {
        galleryPage.classList.remove('active');
        mainPage.classList.add('active');
        currentPage = 'main';
        
        // 페이지 상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * URL 복사 기능
 */
function copyUrl() {
    const url = window.location.href;
    copyToClipboard(url);
    showToast('청첩장 링크가 클립보드에 복사되었습니다.');
}

/**
 * 클립보드에 텍스트 복사
 * @param {string} text - 복사할 텍스트
 */
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        // 최신 브라우저의 Clipboard API 사용
        navigator.clipboard.writeText(text).catch(err => {
            console.error('클립보드 복사 실패:', err);
            fallbackCopyToClipboard(text);
        });
    } else {
        // 구형 브라우저를 위한 폴백
        fallbackCopyToClipboard(text);
    }
}

/**
 * 폴백 클립보드 복사 함수
 * @param {string} text - 복사할 텍스트
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('폴백 클립보드 복사 실패:', err);
    }
    
    document.body.removeChild(textArea);
}

/**
 * 토스트 메시지 표시
 * @param {string} message - 표시할 메시지
 */
function showToast(message) {
    // 기존 토스트가 있으면 제거
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // 토스트 요소 생성
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 14px;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // 애니메이션으로 표시
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 100);
    
    // 3초 후 제거
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

/**
 * 이미지 지연 로딩 초기화
 */
function initializeImageLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src || img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // IntersectionObserver를 지원하지 않는 브라우저를 위한 폴백
        images.forEach(img => {
            img.src = img.src || img.dataset.src;
        });
    }
}

/**
 * 갤러리 모달 초기화
 */
function initializeGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });
}

/**
 * 이미지 모달 열기
 * @param {string} src - 이미지 소스
 * @param {string} alt - 이미지 대체 텍스트
 */
function openImageModal(src, alt) {
    // 모달 배경 생성
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // 이미지 요소 생성
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // 애니메이션으로 표시
    setTimeout(() => {
        modal.style.opacity = '1';
        img.style.transform = 'scale(1)';
    }, 100);
    
    // 클릭 시 모달 닫기
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal(modal);
        }
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal(modal);
        }
    });
}

/**
 * 이미지 모달 닫기
 * @param {HTMLElement} modal - 모달 요소
 */
function closeImageModal(modal) {
    modal.style.opacity = '0';
    const img = modal.querySelector('img');
    img.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}

/**
 * 로딩 스피너 표시
 */
function showLoadingSpinner() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.classList.add('show');
    }
}

/**
 * 로딩 스피너 숨기기
 */
function hideLoadingSpinner() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.classList.remove('show');
    }
}

/**
 * 페이지 가시성 변경 감지 (백그라운드에서 포그라운드로 돌아올 때)
 */
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && currentPage === 'main') {
        // 메인 페이지로 돌아왔을 때 D-Day 업데이트
        initializeDdayCounter();
    }
});

/**
 * 네트워크 상태 감지
 */
window.addEventListener('online', function() {
    showToast('인터넷 연결이 복구되었습니다.');
});

window.addEventListener('offline', function() {
    showToast('인터넷 연결이 끊어졌습니다. 일부 기능이 제한될 수 있습니다.');
});

/**
 * 에러 핸들링
 */
window.addEventListener('error', function(e) {
    console.error('JavaScript 오류:', e.error);
    // 사용자에게는 에러를 표시하지 않고 콘솔에만 기록
});

/**
 * 성능 모니터링
 */
window.addEventListener('load', function() {
    // 페이지 로드 시간 측정
    const loadTime = performance.now();
    console.log(`페이지 로드 시간: ${Math.round(loadTime)}ms`);
    
    // 3초 이상 로드되면 경고
    if (loadTime > 3000) {
        console.warn('페이지 로드 시간이 3초를 초과했습니다. 이미지 최적화를 고려해보세요.');
    }
});
