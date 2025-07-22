### 📦 프로젝트 구조 및 설계  
**설계 방식:** Atomic Design

---

### 🧠 상태 관리 라이브러리  
**상태 관리:** React Query + Zustand

- **React Query (서버 상태)**  
  - **사용 위치:** `products`, `points`  
  - **사용 이유:** 서버 상태에 특화된 라이브러리로, 서버(또는 로컬)의 데이터를 비동기 fetch로 효율적으로 관리하고 캐싱을 통해 재요청을 줄일 수 있음

- **Zustand (클라이언트 상태)**  
  - **사용 위치:** `basket` (localStorage 기반)  
  - **사용 이유:**  
    - 유저 입력값을 임시 저장하기 위해 localStorage 활용 필요  
    - 접근 페이지가 여러 개라 페이지 간의 상태 공유 필요 → `Zustand + persist`로 간단하게 연동 가능

---

### 🗂️ 페이지 구조
src/
├── app/
│ ├── basket/ # 장바구니 페이지
│ ├── checkout/ # 결제 페이지
│ ├── products/ # 상품 목록 페이지 (랜딩페이지)
│ ├── globals.css # 글로벌 CSS
│ ├── layout.tsx # 공통 레이아웃
│ ├── rootLayout.tsx # layout.tsx의 자식요소로 들어가있는 레이아웃
│ │ → QueryClientProvider 선언 (클라이언트 컴포넌트)
│ └── page.tsx # 루트 페이지 - /products로 리디렉션
│
├── assets/ # 이미지 파일
│
├── lib/
│ ├── api/ # 비동기 데이터 요청 관련 유틸 (products, point)
│ ├── interface/ # TypeScript 타입 정의
│ └── utils/ # 그 외 유틸 함수 (가격 계산 등)
│
├── store/
│ └── basketStore.tsx # Zustand 기반 장바구니 상태 관리 및 localStorage 연동
│
├── ui/
│ ├── atom/ # 가장 작은 단위의 UI 컴포넌트
│ ├── molecule/ # 여러 atom 조합 컴포넌트
│ └── organism/ # 페이지 단위의 큰 컴포넌트 - 리스트 묶음
