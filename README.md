# 웨딩 청첩장 프로젝트
HTML/CSS/JavaScript 기반의 모바일 친화적인 웹 청첩장입니다!!.

## 📁 프로젝트 구조

```
청첩장 프로젝트/
├── index.html          # 메인 HTML 파일
├── styles/
│   └── main.css        # 메인 스타일시트
├── scripts/
│   └── main.js         # 메인 JavaScript 파일
├── images/             # 이미지 폴더 (직접 생성 필요)
│   ├── cover.jpg       # 커버 이미지
│   ├── gallery1.jpg    # 갤러리 이미지 1
│   ├── gallery2.jpg    # 갤러리 이미지 2
│   ├── gallery3.jpg    # 갤러리 이미지 3
│   ├── gallery4.jpg    # 갤러리 이미지 4
│   ├── gallery5.jpg    # 갤러리 이미지 5
│   ├── gallery6.jpg    # 갤러리 이미지 6
│   ├── gallery7.jpg    # 갤러리 이미지 7
│   └── gallery8.jpg    # 갤러리 이미지 8
└── README.md           # 이 파일
```

## 🚀 시작하기

### 1. 이미지 폴더 생성
프로젝트 루트에 `images` 폴더를 생성하세요.

### 2. 이미지 준비
다음 이미지들을 준비하여 `images` 폴더에 저장하세요:

- **cover.jpg**: 커버 이미지 (권장 크기: 400x600px 이상)
- **gallery1.jpg ~ gallery8.jpg**: 갤러리 이미지들 (권장 크기: 400x400px 이상)

### 3. 개인 정보 수정
`index.html` 파일에서 다음 정보를 실제 정보로 수정하세요:

```html
<!-- 커버 섹션 -->
<h1 class="couple-names">김민수 ♡ 박지영</h1>
<p class="wedding-date">2024년 5월 18일 토요일</p>
<p class="wedding-time">오후 2시</p>

<!-- 예식 정보 -->
<p>서울 웨딩홀 3층 그랜드홀</p>
<p class="address">서울특별시 강남구 테헤란로 123</p>

<!-- 연락처 -->
<span class="contact-number">010-1234-5678</span> <!-- 신랑 -->
<span class="contact-number">010-9876-5432</span> <!-- 신부 -->
<span class="contact-number">010-5555-1234</span> <!-- 혼주 -->
```

### 4. 지도 API 설정
`index.html` 파일에서 카카오 지도 API 키를 설정하세요:

```html
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_MAP_API_KEY"></script>
```

그리고 `scripts/main.js` 파일에서 실제 좌표로 수정하세요:

```javascript
// 지도 중심 좌표 (실제 예식장 좌표로 변경)
const mapOption = {
    center: new kakao.maps.LatLng(37.5665, 126.9780), // 실제 위도, 경도로 변경
    level: 3
};
```

### 5. SEO 메타태그 수정
`index.html`의 `<head>` 섹션에서 다음 정보를 수정하세요:

```html
<title>김민수 ♡ 박지영 결혼합니다</title>
<meta name="description" content="김민수 ♡ 박지영의 결혼식을 축하해 주세요. 2024년 5월 18일 오후 2시, 서울 웨딩홀에서 만나요.">
<meta property="og:title" content="김민수 ♡ 박지영 결혼합니다">
<meta property="og:description" content="2024년 5월 18일 오후 2시, 서울 웨딩홀에서 만나요">
<meta property="og:image" content="./images/cover.jpg">
<meta property="og:url" content="https://wedding-invitation.example.com">
```

## ✨ 주요 기능

### 📱 모바일 최적화
- 반응형 디자인으로 모든 기기에서 최적화
- 터치 친화적인 인터페이스
- 빠른 로딩 속도 (3초 이내 목표)

### 🗺️ 지도 및 길찾기
- 카카오 지도 API 연동
- 카카오내비, 티맵, 네이버지도 바로가기
- 모바일 앱 연동 지원

### 📞 연락처 기능
- 원터치 전화 걸기 (모바일)
- 클립보드 복사 (데스크톱)
- 신랑, 신부, 혼주 연락처 제공

### 🖼️ 갤러리
- 메인 페이지에서 미리보기
- 별도 갤러리 페이지
- 이미지 모달 뷰어
- 지연 로딩으로 성능 최적화

### 📤 공유 기능
- URL 클립보드 복사
- 소셜 미디어 공유 최적화
- 카카오톡 미리보기 지원

### ⏰ D-Day 카운터
- 실시간 D-Day 계산
- 자동 업데이트

## 🎨 디자인 특징

- **색상**: 따뜻하고 우아한 톤 (아이보리, 골드, 톤 다운된 핑크/민트)
- **폰트**: Noto Sans KR (가독성 최적화)
- **레이아웃**: 모바일 우선 설계
- **애니메이션**: 부드러운 전환 효과
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript (ES6+)**: 바닐라 JavaScript
- **카카오 지도 API**: 지도 및 길찾기
- **Web APIs**: Clipboard API, Intersection Observer

## 📱 브라우저 지원

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- 모바일 브라우저 (iOS Safari, Android Chrome)

## 🚀 배포 방법

### 1. 정적 호스팅 (추천)
- **GitHub Pages**: 무료, 간단한 설정
- **Netlify**: 무료, 자동 배포
- **Vercel**: 무료, 빠른 성능

### 2. 웹 서버 업로드
- FTP/SFTP를 통한 파일 업로드
- Apache/Nginx 웹 서버 설정

### 3. 로컬 테스트
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## 📊 성능 최적화

- 이미지 압축 및 최적화
- 지연 로딩 (Lazy Loading)
- CSS/JS 최소화
- 캐싱 헤더 설정
- CDN 사용 권장

## 🔒 보안 고려사항

- 개인정보는 정적 정보로만 구성
- 외부 API 키는 환경변수로 관리
- HTTPS 사용 권장
- CSP(Content Security Policy) 설정 권장

## 📝 사용자 가이드

### 갤러리 사용법
1. 메인 페이지 하단의 "더 많은 사진 보기" 버튼 클릭
2. 갤러리 페이지에서 사진 클릭하여 확대 보기
3. "돌아가기" 버튼으로 메인 페이지로 이동

### 길찾기 사용법
1. "오시는 길" 섹션에서 원하는 앱 버튼 클릭
2. 앱이 설치되어 있지 않으면 웹 지도로 이동
3. 지도에서 마커 클릭하여 상세 정보 확인

### 공유하기
1. "청첩장 공유하기" 버튼 클릭
2. URL이 클립보드에 복사됨
3. 카카오톡, 문자 등에 붙여넣기

## 🐛 문제 해결

### 지도가 표시되지 않는 경우
- 카카오 지도 API 키가 올바른지 확인
- 인터넷 연결 상태 확인
- 브라우저 콘솔에서 오류 메시지 확인

### 이미지가 표시되지 않는 경우
- 이미지 파일명이 정확한지 확인
- 이미지 파일이 `images` 폴더에 있는지 확인
- 이미지 파일 크기가 너무 크지 않은지 확인

### 모바일에서 전화가 걸리지 않는 경우
- 전화번호 형식이 올바른지 확인 (예: 010-1234-5678)
- 모바일 기기에서 테스트하는지 확인

## 📞 지원

문제가 발생하거나 추가 기능이 필요한 경우, 프로젝트 관리자에게 문의하세요.

---

**축하합니다! 🎉**  
아름다운 웨딩이 되시길 바랍니다!
