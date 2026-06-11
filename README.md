# Frame Design System

디자인 토큰 기반의 UI 시스템을 구축하고, 이를 활용해 재사용 가능한 컴포넌트와 패턴을 설계한 디자인 시스템 프로젝트입니다.

단순히 UI를 구현하는 것을 넘어 색상, 타이포그래피, 레이아웃, 모션 등 시각적 기준을 토큰화하고, 실제 서비스 환경에서 사용할 수 있는 컴포넌트 아키텍처를 구성하는 것을 목표로 했습니다.

## Live Demo

frame-design-system.vercel.app

---

## Preview

### Light Mode

![Light Mode](./readme/light.png)

### Dark Mode

![Dark Mode](./readme/dark.png)

### Modal

![Modal](./readme/modal.png)

---

## Why This Project?

프로젝트를 진행하며 동일한 스타일이 여러 곳에서 반복되고, 컴포넌트마다 스타일 기준이 달라질 경우 유지보수 비용이 빠르게 증가한다는 점에 관심을 가지게 되었습니다.

이를 해결하기 위해 디자인 토큰을 중심으로 시스템을 설계하고, 일관된 UI와 확장 가능한 구조를 구축하는 과정을 직접 경험해보고자 했습니다.

---

## Tech Stack

* React
* JavaScript (ES6+)
* Vite
* CSS
* GitHub
* Vercel

---

## Design Foundations

### Color Tokens

브랜드 컬러와 시맨틱 컬러를 분리하여 관리했습니다.

* Brand
* Accent
* Success
* Warning
* Error
* Info

### Typography

일관된 정보 전달을 위한 타이포그래피 계층을 정의했습니다.

* Display
* Heading
* Body
* Caption

### Spacing

컴포넌트와 레이아웃 전반에서 사용하는 간격 기준을 토큰으로 관리했습니다.

### Radius

컴포넌트의 시각적 일관성을 위한 Radius 토큰을 정의했습니다.

### Shadow

레이어와 깊이를 표현하기 위한 Shadow 토큰을 구성했습니다.

### Motion

애니메이션 지속 시간과 이징 값을 토큰화하여 인터랙션의 일관성을 확보했습니다.

### Layout

반응형 환경을 고려한 레이아웃 토큰을 정의했습니다.

* Container
* Breakpoints
* 12 Column Grid

---

## Theme System

라이트·다크 모드 전환을 지원하며, 접근성을 고려한 색상 대비와 일관된 시각적 계층을 제공합니다.

### Features

* Light / Dark Mode Toggle
* CSS Variable 기반 Theme Architecture
* 실시간 테마 전환 지원

---

## Components

### Button

다양한 상태를 지원하는 재사용 가능한 버튼 컴포넌트

* Primary
* Secondary
* Ghost
* Disabled
* Loading

### Input

기본 폼 입력 컴포넌트

### Badge

상태 정보를 표현하기 위한 컴포넌트

### Tag

메타데이터 및 분류를 위한 컴포넌트

### Modal

오버레이 기반 인터랙션 컴포넌트

지원 기능

* Overlay Click Close
* ESC Key Close
* Scroll Lock

---

## Patterns

### Empty State

데이터가 존재하지 않는 상황에서 사용자에게 적절한 안내를 제공하는 패턴

### Product Card

디자인 토큰을 기반으로 구성된 커머스 카드 패턴

---

## UX Engineering

### useScrollLock

모달 활성화 시 백그라운드 스크롤을 방지하는 커스텀 훅을 구현했습니다.

### Keyboard Interaction

ESC 키 입력을 통해 모달을 종료할 수 있도록 구현했습니다.

### Theme Toggle

CSS Variable 기반의 테마 전환 시스템을 구현했습니다.

---

## Folder Structure

```text
src
├─ components
├─ hooks
├─ pages
├─ styles
└─ tokens
```

---

## What I Learned

* 디자인 토큰 기반 설계 방식
* 재사용 가능한 컴포넌트 아키텍처 구성
* Theme System 구축 경험
* Layout Foundation 설계 경험
* Modal 인터랙션 및 UX 엔지니어링 구현
* 디자인 시스템 문서화 경험

---

## Future Improvements

* Checkbox
* Radio
* Switch
* Form Validation
* Accessibility Improvements
* Component Documentation Expansion

```
```
