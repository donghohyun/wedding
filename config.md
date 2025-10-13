# 웨딩 청첩장 설정 파일

## 기본 정보 설정

### 신랑/신부 정보
```javascript
const WEDDING_INFO = {
    // 신랑 정보
    groom: {
        name: "김민수",
        phone: "010-1234-5678",
        parents: {
            father: "김○○",
            mother: "이○○"
        }
    },
    
    // 신부 정보
    bride: {
        name: "박지영",
        phone: "010-9876-5432",
        parents: {
            father: "박○○",
            mother: "정○○"
        }
    },
    
    // 혼주 정보
    host: {
        phone: "010-5555-1234"
    },
    
    // 예식 정보
    ceremony: {
        date: "2024-05-18", // YYYY-MM-DD 형식
        time: "14:00", // HH:MM 형식
        venue: "서울 웨딩홀 3층 그랜드홀",
        address: "서울특별시 강남구 테헤란로 123",
        coordinates: {
            latitude: 37.5665, // 실제 위도
            longitude: 126.9780 // 실제 경도
        }
    }
};
```

## 카카오 지도 API 설정

### API 키 발급 방법
1. https://developers.kakao.com 접속
2. 카카오 계정으로 로그인
3. "내 애플리케이션" → "애플리케이션 추가하기"
4. 앱 이름 입력 후 생성
5. "플랫폼" → "Web 플랫폼 등록"
6. 사이트 도메인 등록
7. "앱 키" → "JavaScript 키" 복사

### API 키 설정
```html
<!-- index.html의 head 섹션에서 수정 -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_ACTUAL_API_KEY"></script>
```

## 이미지 설정

### 이미지 파일 경로
```javascript
const IMAGE_PATHS = {
    cover: "./images/cover.jpg",
    gallery: [
        "./images/gallery1.jpg",
        "./images/gallery2.jpg",
        "./images/gallery3.jpg",
        "./images/gallery4.jpg",
        "./images/gallery5.jpg",
        "./images/gallery6.jpg",
        "./images/gallery7.jpg",
        "./images/gallery8.jpg"
    ]
};
```

## SEO 설정

### 메타 태그 설정
```html
<!-- index.html의 head 섹션에서 수정 -->
<title>김민수 ♡ 박지영 결혼합니다</title>
<meta name="description" content="김민수 ♡ 박지영의 결혼식을 축하해 주세요. 2024년 5월 18일 오후 2시, 서울 웨딩홀에서 만나요.">
<meta property="og:title" content="김민수 ♡ 박지영 결혼합니다">
<meta property="og:description" content="2024년 5월 18일 오후 2시, 서울 웨딩홀에서 만나요">
<meta property="og:image" content="./images/cover.jpg">
<meta property="og:url" content="https://your-wedding-site.com">
```

## 색상 테마 설정

### CSS 변수로 색상 관리
```css
:root {
    /* 기본 색상 */
    --primary-color: #e74c3c;
    --secondary-color: #3498db;
    --accent-color: #f39c12;
    --text-color: #2c3e50;
    --background-color: #fafafa;
    
    /* 그라데이션 */
    --gradient-primary: linear-gradient(135deg, #e74c3c, #c0392b);
    --gradient-secondary: linear-gradient(135deg, #3498db, #2980b9);
    --gradient-accent: linear-gradient(135deg, #f39c12, #e67e22);
}
```

## 성능 최적화 설정

### 이미지 최적화
- **커버 이미지**: 400x600px, 85% 품질, 500KB 이하
- **갤러리 이미지**: 400x400px, 85% 품질, 300KB 이하
- **WebP 형식**: 지원 브라우저에서 사용

### 로딩 최적화
```javascript
// 지연 로딩 설정
const LAZY_LOADING_CONFIG = {
    rootMargin: '50px',
    threshold: 0.1
};

// 이미지 프리로딩
const PRELOAD_IMAGES = [
    './images/cover.jpg',
    './images/gallery1.jpg',
    './images/gallery2.jpg'
];
```

## 배포 설정

### GitHub Pages 배포
1. GitHub 저장소 생성
2. 파일 업로드
3. Settings → Pages → Source: Deploy from a branch
4. Branch: main 선택
5. 저장 후 자동 배포

### Netlify 배포
1. https://netlify.com 접속
2. "New site from Git" 클릭
3. GitHub 저장소 연결
4. Build settings:
   - Build command: (비워둠)
   - Publish directory: /
5. Deploy site

### 도메인 설정
```html
<!-- 커스텀 도메인 사용 시 -->
<meta property="og:url" content="https://your-custom-domain.com">
```

## 보안 설정

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' 'unsafe-inline' dapi.kakao.com;
    style-src 'self' 'unsafe-inline' fonts.googleapis.com;
    font-src 'self' fonts.gstatic.com;
    img-src 'self' data:;
    connect-src 'self';
">
```

## 분석 도구 설정

### Google Analytics (선택사항)
```html
<!-- Google Analytics 코드 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 테스트 체크리스트

### 기능 테스트
- [ ] D-Day 카운터 정상 작동
- [ ] 지도 표시 및 마커 클릭
- [ ] 길찾기 버튼 작동 (모바일/데스크톱)
- [ ] 전화 걸기 기능 (모바일)
- [ ] 갤러리 페이지 전환
- [ ] 이미지 모달 뷰어
- [ ] URL 복사 기능
- [ ] 반응형 디자인 (다양한 화면 크기)

### 성능 테스트
- [ ] 페이지 로드 시간 3초 이내
- [ ] 이미지 지연 로딩 작동
- [ ] 모바일에서 부드러운 스크롤
- [ ] 네트워크 연결 끊김 시 처리

### SEO 테스트
- [ ] 메타 태그 정상 표시
- [ ] 카카오톡 공유 미리보기
- [ ] 페이스북 공유 미리보기
- [ ] 구글 검색 결과 표시

## 문제 해결

### 자주 발생하는 문제
1. **지도가 표시되지 않음**: API 키 확인
2. **이미지가 로드되지 않음**: 파일 경로 및 이름 확인
3. **모바일에서 전화가 안됨**: 전화번호 형식 확인
4. **공유 미리보기가 안됨**: 메타 태그 및 이미지 경로 확인

### 디버깅 도구
- **브라우저 개발자 도구**: F12
- **모바일 테스트**: Chrome DevTools Device Mode
- **성능 분석**: Lighthouse
- **접근성 검사**: axe DevTools
