# 이미지 파일 안내

이 폴더에는 다음 이미지 파일들이 필요합니다:

## 필수 이미지 파일

### 1. cover.jpg
- **용도**: 메인 커버 이미지
- **권장 크기**: 400x600px 이상
- **권장 비율**: 2:3 (세로형)
- **파일 크기**: 500KB 이하 권장

### 2. gallery1.jpg ~ gallery8.jpg
- **용도**: 갤러리 이미지들
- **권장 크기**: 400x400px 이상
- **권장 비율**: 1:1 (정사각형)
- **파일 크기**: 각 300KB 이하 권장

## 이미지 최적화 팁

### 파일 형식
- **JPEG**: 사진에 적합 (cover.jpg, gallery*.jpg)
- **WebP**: 더 작은 파일 크기 (지원 브라우저에서)
- **PNG**: 투명도가 필요한 경우

### 압축 도구
- **온라인**: TinyPNG, Compressor.io
- **데스크톱**: Photoshop, GIMP, ImageOptim
- **명령줄**: ImageMagick, Sharp

### 최적화 명령어 (ImageMagick)
```bash
# JPEG 압축
magick input.jpg -quality 85 -resize 400x600 output.jpg

# WebP 변환
magick input.jpg -quality 85 -resize 400x600 output.webp
```

## 샘플 이미지 생성

실제 이미지가 준비되지 않은 경우, 다음 방법으로 임시 이미지를 생성할 수 있습니다:

### 1. 온라인 플레이스홀더
- https://picsum.photos/400/600 (커버용)
- https://picsum.photos/400/400 (갤러리용)

### 2. CSS로 임시 배경 생성
```css
.placeholder-image {
    background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 14px;
}
```

## 파일명 규칙

- **영문자, 숫자, 하이픈(-), 언더스코어(_)만 사용**
- **공백 사용 금지**
- **대소문자 구분**
- **확장자는 소문자로 통일**

## 권장 파일명

```
cover.jpg
gallery1.jpg
gallery2.jpg
gallery3.jpg
gallery4.jpg
gallery5.jpg
gallery6.jpg
gallery7.jpg
gallery8.jpg
```

## 주의사항

1. **저작권**: 사용할 이미지의 저작권을 확인하세요
2. **개인정보**: 개인정보가 포함된 이미지는 사용을 피하세요
3. **품질**: 너무 압축하지 말고 적절한 품질을 유지하세요
4. **백업**: 원본 이미지는 별도로 보관하세요

## 이미지 준비 체크리스트

- [ ] cover.jpg 준비 완료
- [ ] gallery1.jpg ~ gallery8.jpg 준비 완료
- [ ] 모든 이미지 파일 크기 최적화 완료
- [ ] 이미지 파일명 규칙 준수
- [ ] 이미지 품질 확인
- [ ] 저작권 확인 완료
