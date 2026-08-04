# Frame Design System Case Study

컬러, 타이포그래피, 간격과 상태 기준을 디자인 토큰으로 구조화하고,
일관된 컴포넌트와 Light/Dark Theme으로 확장한
디자인 시스템 포트폴리오 프로젝트입니다.

---

## 1. Project Overview

| 항목 | 내용 |
|-----|-----|
| Project | Frame Design System |
| Type | Design System Portfolio |
| Role | UI Foundation, Token Structure, Component Guidelines, UI States, Theme, UI QA |
| Environment | Figma, React, Vite, CSS, GitHub, Vercel |
| Scope | Foundations, Tokens, Components, Patterns, Theme, Documentation |
| Status | Responsive Web / Deployed |

### My Contribution

- 컬러, 타이포그래피, 간격과 시각 속성 체계 정의
- Primitive, Semantic과 Component Token 구조 설계
- 공통 UI의 크기, 변형과 상태 기준 정의
- Light/Dark Theme의 색상과 대비 기준 구성
- 컴포넌트 사용 예시와 가이드 작성
- 반응형 화면과 인터랙션 기준 정리
- 브라우저에서 토큰, 상태와 테마 적용 결과 검수
- HTML/CSS와 UI 결과 수정
- GitHub 저장소 관리 및 Vercel 배포

---

## 2. Why This Project

Minimal Ecommerce를 구성하는 과정에서
버튼, 카드, 입력 요소와 간격 기준이 여러 화면에서 반복되고,
화면마다 기준을 다르게 적용하면 UI의 일관성을 유지하기 어렵다는 점을 확인했습니다.

이를 계기로 개별 화면 중심의 작업에서 확장해,
컬러, 타이포그래피, 간격과 상태 표현을 공통 기준으로 정의하고
여러 UI에서 재사용할 수 있는 디자인 시스템 구조를 설계했습니다.

```text
Minimal Ecommerce
반응형 UI와 인터랙션 구성
        ↓
반복되는 시각·상태 기준 발견
        ↓
Frame Design System
토큰과 컴포넌트 기준 체계화
```

이 프로젝트의 목적은 컴포넌트의 개수를 늘리는 것이 아니라,
디자인 기준이 여러 화면과 구현 환경에서
일관된 의미로 적용될 수 있도록 공통 기준을 정리하는 것이었습니다.

## 3. Design System Goal

Frame Design System은 다음 질문에서 출발했습니다.

여러 화면과 컴포넌트에서 동일한 시각적 기준과 상태 표현을
어떻게 일관되게 유지할 수 있을까?

이를 위해 색상, 타이포그래피와 간격 기준을 공통 토큰으로 정리하고, 
각 토큰은 사용 목적이 드러나는 의미 기반 명칭으로 정의했습니다.

### Core Goals
- 컬러, 타이포그래피와 간격의 공통 기준 정의
- 원시 값과 의미 기반 토큰의 역할 구분
- 반복되는 UI의 공통 구조와 사용 기준 정리
- 컴포넌트의 크기, 변형과 상태 체계화
- Light/Dark Theme에서 동일한 의미와 위계 유지
- 디자인 토큰과 브라우저 UI의 명칭·역할 연결
- 실제 화면 조합을 고려한 UI 패턴 구성
- 다른 프로젝트에 적용할 수 있는 확장 기준 마련

### System Flow
Design Foundations
        ↓
Design Tokens
        ↓
Components
        ↓
Patterns
        ↓
Theme Application
        ↓
Product UI Application

디자인 시스템을 독립적인 스타일 모음으로 구성하기보다,
기초 시각 기준이 컴포넌트와 실제 화면의 UI 원칙으로 이어질 수 있도록 구조화했습니다.

## 4. Design Foundations & Tokens

Frame Design System은 컴포넌트부터 구성하기보다,
UI 전반에서 반복되는 색상, 타이포그래피, 간격과 상태 기준을
먼저 정의하는 것에서 시작했습니다.

### Design Foundations

주요 Foundation은 다음과 같이 구성했습니다.

- Color
- Typography
- Spacing
- Radius
- Shadow
- Layout
- Motion

각 항목은 특정 화면에만 사용하는 값이 아니라,
여러 컴포넌트와 패턴에서 공통으로 활용할 수 있는 기준으로 정리했습니다.

### Token Structure

디자인 토큰은 역할과 적용 범위에 따라 세 단계로 구분했습니다.

```text
Primitive Tokens
기초 색상과 수치 기준
        ↓
Semantic Tokens
배경, 텍스트, 경계선과 상태의 의미
        ↓
Component Tokens
버튼, 입력 요소와 카드의 사용 맥락
```

### Primitive Tokens

원시 토큰은 색상 팔레트, 간격과 크기처럼
디자인 시스템의 기초가 되는 값을 정의합니다.

예:
- `blue-500`
- `gray-100`
- `space-4`
- `radius-8`

특정 UI의 역할을 직접 나타내기보다,
의미 기반 토큰을 구성하기 위한 기초 기준으로 사용했습니다.

### Semantic Tokens

의미 기반 토큰은 값 자체보다 UI에서 수행하는 역할을 기준으로 정의했습니다.

예:
color-primary
color-background
color-surface
color-text-primary
color-text-secondary
color-border
color-error

이렇게 역할 중심으로 이름을 정의하면 실제 색상값이 변경돼도 
컴포넌트가 가진 의미는 유지할 수 있습니다.

### Component Tokens

컴포넌트 토큰은 공통 토큰을 버튼, 입력 요소와 카드의 구체적인 사용 맥락에 연결했습니다.

예:
button-primary-background
button-primary-text
input-border-default
input-border-focus
card-background
card-shadow

모든 컴포넌트에 새로운 값을 별도로 정의하기보다,
필요한 경우 의미 기반 토큰을 각 컴포넌트의 역할에 맞게 연결했습니다.

### Typography

타이포그래피는 단순한 글자 크기 목록이 아니라,
정보 계층과 사용 목적에 따라 구분했습니다.

- Display
- Heading
- Body
- Label
- Caption

각 스타일은 글자 크기, 굵기, 줄 높이와 자간을 함께 정의해
화면이 달라져도 동일한 정보 위계를 유지하도록 했습니다.

### Spacing

간격은 임의의 값을 반복해서 사용하는 대신,
일정한 단계의 스케일로 정의했습니다.

4 → 8 → 12 → 16 → 24 → 32 → 48 → 64

이 기준을 컴포넌트 내부 여백, 요소 사이의 간격과 페이지 레이아웃에 공통으로 적용했습니다.

### Foundation Outcome

Foundation과 토큰을 먼저 정의함으로써 다음과 같은 기준을 마련했습니다.

- 색상, 간격과 타이포그래피 기준의 중복 감소
- 화면과 컴포넌트 사이의 일관성 유지
- 테마 변경 시 조정 범위 축소
- 새로운 UI를 구성할 때 참고할 공통 기준 확보

## 5. Component System

디자인 토큰을 실제 UI에 적용하기 위해,
반복적으로 사용되는 요소의 공통 구조와 사용 기준을 정리했습니다.

각 컴포넌트는 형태만 정의하는 데 그치지 않고,
사용 목적, 크기, 변형과 상태를 함께 고려했습니다.

### Core Components

주요 컴포넌트는 다음과 같습니다.

- Color
- Typography
- Spacing
- Radius
- Shadow
- Layout
- Motion

### Variants and Sizes

동일한 컴포넌트가 화면마다 서로 다른 기준으로 표현되지 않도록,
사용 목적과 크기에 따른 변형 기준을 정리했습니다.

예:
```jsx
<Button variant="primary" size="medium">
  Confirm
</Button>

<Button variant="secondary" size="medium">
  Cancel
</Button>
```
위 코드는 구현 환경에 적용된 사용 예시입니다.

디자인 관점에서는 Primary와 Secondary의 역할과 위계,
크기별 높이, 내부 간격과 상태 표현이
일관되게 유지되는지를 중심으로 검수했습니다.

### Component States

컴포넌트의 사용 맥락에 따라
다음과 같은 상태 기준을 정의했습니다.

- Default
- Hover
- Focus
- Active
- Selected
- Disabled
- Error

Focus는 현재 조작 중인 요소를 명확히 확인할 수 있도록 하고,
Error는 입력 문제와 수정이 필요한 지점을 인지할 수 있도록 구성했습니다.

### Form Components

입력 요소는 개별 필드만 분리해서 다루지 않고,
라벨, 도움말과 오류 메시지를 포함한 하나의 사용 단위로 구성했습니다.

Label
  ↓
Input / Select
  ↓
Helper Text or Error Message

화면마다 라벨의 위치나 오류 표시 방식이 달라지지 않도록
공통된 정보 구조와 상태 표현 기준을 적용했습니다.

### Cards and Content Components

카드는 콘텐츠 유형에 따라 세부 표현은 달라질 수 있지만,
공통된 정보 구조와 간격 기준을 유지하도록 구성했습니다.

- Image or Icon
- Title
- Description
- Metadata
- Action

이 기준은 제품 카드, 자료 카드와 정보 카드 등
서로 다른 콘텐츠 유형에 확장할 수 있는 기본 구조로 활용했습니다.

### UI Patterns

개별 컴포넌트의 정의에 그치지 않고,
실제 화면에서 함께 사용되는 구성과 인터랙션 패턴까지 확장했습니다.

- Form Field
- Search Interface
- Filter Group
- Card Group
- Modal Action
- Empty State
- Navigation Pattern

패턴은 여러 컴포넌트가 실제 사용 흐름 안에서 
어떤 순서와 위계로 조합되는지를 확인하기 위해 구성했습니다.

### Reuse and Consistency

공통 컴포넌트 기준을 사용함으로써
버튼, 입력 요소와 상태 표현이 화면마다 다르게 적용되는 것을 줄이고,
동일한 디자인과 인터랙션 원칙을 반복해서 사용할 수 있도록 했습니다.

컴포넌트 체계화의 목적은 단순히 UI 요소를 재사용하는 데 그치지 않고,
여러 화면에서 동일한 의미, 위계와 사용 방식을 유지하는 데 있었습니다.

## 6. Theme & Interaction States

Frame Design System은 동일한 컴포넌트 구조를 유지하면서,
의미 기반 토큰 값을 전환해 Light와 Dark Theme을 지원하도록 구성했습니다.

### Theme Principle

테마마다 컴포넌트 기준을 새로 정의하지 않고,
배경, 텍스트, 경계선과 상태 색상에 연결된
의미 기반 토큰이 테마에 따라 전환되도록 구성했습니다.

```text
Component Structure
        +
Semantic Tokens
        ↓
Light Theme / Dark Theme
```

주요 테마 토큰은 다음 역할을 기준으로 정의했습니다.

- Background
- Surface
- Primary Text
- Secondary Text
- Border
- Primary Action
- Focus
- Error

특정 색상 이름보다 UI에서 수행하는 역할을 중심으로 정의해,
테마가 달라져도 컴포넌트의 의미와 정보 위계가 유지되도록 했습니다.

### Theme Consistency

Light와 Dark Theme에서 단순히 배경색만 반전하지 않고,
텍스트 대비, 경계선, 입력 상태와 주요 행동의 위계를 함께 조정했습니다.

동일한 컴포넌트가 테마에 따라 서로 다른 역할처럼 보이지 않도록,
텍스트와 배경의 대비, 표면의 구분과 상태별 강조 수준을
일관된 기준으로 유지했습니다.

### Interaction States

컴포넌트의 사용 맥락에 따라 다음 상태 기준을 적용했습니다.

- Default
- Hover
- Focus
- Active
- Selected
- Disabled
- Error

Focus 상태는 현재 조작 중인 요소를 명확히 확인할 수 있도록 하고,
Error 상태는 입력 문제와 수정이 필요한 지점을 쉽게 인지할 수 있도록 구성했습니다.

Selected와 Disabled 상태는 색상 차이만으로 구분하지 않고,
경계선, 배경과 투명도 등 여러 시각적 단서를 함께 사용했습니다.

### State Principle

상태 표현은 컴포넌트마다 개별적으로 결정하지 않고,
동일한 상호작용은 동일한 방식으로 인지되도록 공통 기준을 적용했습니다.

이를 통해 사용자가 버튼, 입력 요소와 선택 UI를 
화면마다 새롭게 해석하지 않도록 했습니다.

## 7. Design-to-UI

Frame Design System에서는 Figma에서 정리한 디자인 기준이
브라우저 화면에서도 같은 명칭과 역할로 이어지는지 확인했습니다.

토큰, 컴포넌트 상태와 사용 원칙을 구현 환경과 연결하고,
디자인 결과와 실제 UI 사이의 차이를 검수·조정하는 데 집중했습니다.

### Connection Structure

```text
Design Foundation
        ↓
Design Token
        ↓
CSS Custom Property
        ↓
React-based UI
        ↓
UI Pattern
```

Figma에서 정의한 디자인 기준을 CSS 토큰과 연결하고,
React 기반 브라우저 화면에서 컴포넌트 상태와
UI 패턴이 의도한 기준에 맞게 표현되는지 확인했습니다.

### CSS Token Implementation

컬러, 타이포그래피, 간격, 반경과 그림자 기준은 공통 CSS 변수 구조로 적용되었습니다.

:root {
  --color-primary: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-text-primary: ...;
  --space-4: ...;
  --radius-medium: ...;
  --shadow-card: ...;
}

같은 값을 개별 UI마다 반복해서 지정하기보다,
각 요소의 역할에 맞는 토큰을 참조하도록 구성하고
브라우저 화면에서 일관되게 표현되는지 확인했습니다.

### Naming Alignment

디자인과 구현 환경에서 동일한 개념을 서로 다른 이름으로 표현하면,
협업 과정에서 기준을 해석하고 전달하는 비용이 커질 수 있습니다.

이를 줄이기 위해 토큰과 컴포넌트의 명칭을
역할과 적용 범위가 드러나는 방식으로 정리했습니다.

- Primitive: `blue-600`
- Semantic: `color-primary`
- Component: `button-primary-background`

이 구조를 통해 각 토큰의 기초 값과 의미,
실제 UI에서의 적용 목적을 단계적으로 확인할 수 있도록 했습니다.

### Component Usage Example

구현 환경에서는 컴포넌트의 사용 목적과 크기가
명칭을 통해 구분되도록 다음과 같은 구조로 적용되었습니다.

```jsx
<Button variant="primary" size="medium">
  Confirm
</Button>

<Button variant="secondary" size="medium">
  Cancel
</Button>
```

디자인 관점에서는 Primary와 Secondary의 역할과 위계,
크기별 높이와 내부 간격, 상태 표현이
화면마다 일관되게 유지되는지를 중심으로 검수했습니다.

### Documentation

컴포넌트 문서에는 다음 내용을 포함했습니다.

- Purpose
- Variants
- Sizes
- States
- Usage Example
- Interaction
- Accessibility Considerations

문서화는 결과 화면을 나열하는 데 그치지 않고,
디자이너와 개발자가 컴포넌트의 목적, 상태와 사용 기준을
같은 방식으로 이해하고 검토할 수 있도록 하는 데 목적을 두었습니다.

### What Design-to-UI Means Here

이 프로젝트에서 Design-to-UI는
Figma와 코드의 자동 동기화나 컴포넌트 패키지 배포를 의미하지 않습니다.

디자인에서 정의한 토큰, 상태와 사용 원칙을
React 기반 브라우저 화면에 연결하고,
동일한 명칭과 역할이 실제 UI에서도 유지되는지 검수·조정한 과정을 의미합니다.

## 8. Application to SLI Scientific

Frame Design System에서 정리한 토큰과 컴포넌트 원칙을
다음 프로젝트인 SLI Scientific의 UI Foundation에 적용했습니다.

Frame의 구조를 그대로 옮기기보다,
전문 제품을 다루는 B2B 정보 플랫폼의 콘텐츠 밀도와 사용 맥락에 맞게
컬러, 타이포그래피, 간격과 컴포넌트 기준을 조정했습니다.

### Applied Principles

| Frame Design System | SLI Scientific Application |
|-----|-----|
| Semantic color tokens | Deep Blue, Slate, Muted Cyan을 활용한 컬러 체계 |
| Typography scale | 제품명, 섹션 제목, 설명과 사양 정보의 위계 |
| Spacing rules | 페이지 섹션과 콘텐츠 그룹의 공통 간격 |
| Button variants | 주요 행동, 보조 행동과 텍스트 링크의 구분 |
| Card principles | Product, Resource, Support 카드의 공통 기준 |
| Layout rules | 공통 컨테이너와 페이지 정렬 기준 |
| Responsive rules | Desktop, Tablet, Mobile 레이아웃 전환 |
| Component states | Hover, Focus, Selected와 Disabled 상태 표현 |

### Contextual Extension

전문 제품을 다루는 B2B 서비스의 콘텐츠 특성에 맞춰
다음 기준을 추가로 정리했습니다.

- 긴 제품명과 모델명을 수용할 수 있는 카드 구조
- 기술 사양과 문서를 위한 높은 정보 밀도
- 제품 이미지와 텍스트 정보의 균형
- 모델 선택에서 제품 문의까지 이어지는 흐름
- 모바일 환경에 맞춘 제품 상세 정보의 재배치
- 신뢰감과 전문성을 전달하는 차분한 시각 체계

### From System to Product UI

```text
Frame Design System
토큰과 컴포넌트 원칙
        ↓
SLI Scientific UI Foundation
B2B 콘텐츠에 맞는 기준 확장
        ↓
Product Platform
제품 탐색, 상세 검토와 문의 흐름에 적용
```

이를 통해 디자인 토큰과 컴포넌트 원칙이
서로 다른 서비스 맥락에서 어떻게 조정되고 재사용될 수 있는지 확인했습니다.

Related Project
[SLI Scientific Case Study] (https://github.com/moimoiyk80-maker/platform-redesign/blob/main/docs/case-study.md)

## 9. Outcome & Reflection

### Outcome

Frame Design System을 통해 화면마다 반복되던
색상, 타이포그래피, 간격과 UI 상태 기준을
토큰, 컴포넌트와 패턴의 구조로 체계화했습니다.

주요 결과는 다음과 같습니다.

- 컬러, 타이포그래피, 간격, 반경과 그림자의 공통 기준 정의
- Primitive, Semantic과 Component Token의 역할 구분
- 주요 UI의 변형, 크기와 상태 기준 체계화
- Light/Dark Theme에서 의미와 정보 위계 유지
- 입력, 검색, 필터와 모달 등 반복 UI 패턴 구성
- 디자인 토큰과 CSS 변수의 명칭·역할 연결
- 컴포넌트 사용 방식과 상태 기준 문서화
- SLI Scientific 프로젝트에 시스템 원칙 적용

### What This Project Demonstrates

```text
개별 화면의 UI 구성
        ↓
반복되는 디자인·상태 기준 발견
        ↓
디자인 토큰과 컴포넌트 기준 체계화
        ↓
다른 서비스 맥락의 UI에 적용
```

이 프로젝트의 의미는 많은 컴포넌트를 제작한 데 있기보다, 
여러 화면에서 공통으로 적용할 디자인 기준과 상태별 인터랙션 방식을 체계화했다는 데 있습니다.

### What I Learned

디자인 시스템은 컬러와 컴포넌트를 한곳에 모아놓은 자료가 아니라,
반복되는 디자인 판단과 구현 기준을
팀이 함께 사용할 수 있도록 정리한 공통 언어라는 점을 확인했습니다.

특히 토큰의 명칭을 역할 중심으로 정의하면
테마와 브랜드의 시각 표현이 달라져도
컴포넌트의 목적과 정보 위계를 유지할 수 있었습니다.

또한 컴포넌트는 형태만 정의하는 데서 끝나지 않고,
상태, 사용 맥락과 다른 요소와의 조합까지 함께 고려해야
실제 화면에서 일관되게 활용할 수 있다는 점을 확인했습니다.

### Challenges

가장 어려웠던 부분은 모든 값을 세분화하는 것과
실제로 필요한 기준만 정의하는 것 사이의 균형이었습니다.

토큰이나 컴포넌트 변형을 지나치게 많이 만들면 시스템이 복잡해지고,
너무 적게 만들면 화면마다 예외 스타일이 늘어날 수 있습니다.

따라서 반복되는 사용 사례를 기준으로 공통 규칙을 먼저 정의하고,
특정 화면에서만 필요한 기준은
시스템 전체의 원칙으로 확대하지 않도록 범위를 조정했습니다.

### Limitations

본 프로젝트는 실제 조직에서 여러 디자이너와 개발자가 함께 운영한
프로덕션 디자인 시스템이 아니라,
개인 포트폴리오 범위에서 설계하고 검증한 프로젝트입니다.

따라서 다음 항목은 구현 범위에 포함하지 않았습니다.

- 디자인 토큰 자동 변환 및 배포
- npm 컴포넌트 패키지 배포
- Storybook 기반 문서 사이트
- 버전 관리와 변경 이력 정책
- 다수 제품에서의 운영 검증
- 실제 팀 단위 기여 및 승인 프로세스

대신 디자인 기준을 토큰과 브라우저 UI에 연결하고,
다른 프로젝트에 조정해 적용할 수 있는
디자인 시스템의 기본 구조와 사용 원칙을 정리하는 데 집중했습니다.

### Connection to the Next Project

Frame Design System에서 정리한 시스템 원칙은
SLI Scientific의 정보 구조와 제품 탐색 UI에 적용했습니다.

```text
Minimal Ecommerce
반응형 UI와 인터랙션 구성
        ↓
Frame Design System
토큰과 컴포넌트 기준 체계화
        ↓
SLI Scientific
B2B 정보구조와 제품 탐색 경험에 적용
```

이를 통해 반응형 UI, 디자인 시스템과 실무형 UX 문제 해결을
서로 분리된 결과물이 아니라
단계적으로 확장되는 하나의 포트폴리오 흐름으로 연결했습니다.

## Links

- [Live Demo](https://frame-design-system.vercel.app/)
- [SLI Scientific Project](https://platform-redesign-five.vercel.app)