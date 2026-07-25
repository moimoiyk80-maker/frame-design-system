# Frame Design System Case Study

컬러, 타이포그래피와 간격을 디자인 토큰으로 구조화하고,
일관된 컴포넌트와 테마로 확장한 React 기반 디자인 시스템 프로젝트입니다.

---

## 1. Project Overview

| 항목 | 내용 |
|---|---|
| Project | Frame Design System |
| Type | React Design System |
| Role | UI Foundation, Token Design, Component Design, React Implementation |
| Stack | React, Vite, CSS, JavaScript, Vercel |
| Scope | Foundations, Tokens, Components, Patterns, Theme, Documentation |
| Status | Responsive Web / Deployed |

### My Contribution

- 컬러, 타이포그래피, 간격과 시각 속성 체계 정의
- 원시 토큰과 의미 기반 토큰 구조 설계
- 공통 UI 컴포넌트와 상태 정의
- Light·Dark Theme 구현
- 컴포넌트 사용 예시와 가이드 작성
- 반응형 레이아웃 및 인터랙션 구현
- Vercel 배포와 최종 점검

---

## 2. Why This Project

Minimal Ecommerce를 구현하면서 버튼, 카드, 입력 요소와 간격 규칙이
여러 화면에서 반복되는 것을 확인했습니다.

각 화면에서 개별적으로 스타일을 정의하면 동일한 역할의 UI가 조금씩 다르게 표현되고, 
수정이 필요할 때 여러 파일을 반복해서 변경해야 하는 문제가 발생할 수 있었습니다.

이를 계기로 개별 화면 구현에서 한 단계 확장해 
컬러, 타이포그래피, 간격과 상태 표현을 공통 기준으로 정의하고
컴포넌트와 테마에 적용하는 디자인 시스템을 구축했습니다.

```text
Minimal Ecommerce
React UI와 상태 기반 인터랙션 구현
        ↓
반복되는 시각 규칙과 UI 패턴 발견
        ↓
Frame Design System
토큰과 컴포넌트 체계화
```

이 프로젝트의 목적은 컴포넌트의 개수를 늘리는 것이 아니라,
디자인 기준이 실제 코드와 화면에서 일관되게 사용될 수 있는
구조를 만드는 것이었습니다.

## 3. Design System Goal

Frame Design System은 다음 질문에서 출발했습니다.

여러 화면과 컴포넌트에서 동일한 시각적 기준과 상태 표현을
어떻게 일관되게 유지할 수 있을까?

이를 위해 시각적 값을 개별 컴포넌트에 직접 작성하지 않고,
공통 토큰과 의미 기반 명칭으로 관리했습니다.

### Core Goals
- 컬러, 타이포그래피와 간격의 공통 기준 정의
- 원시 값과 의미 기반 토큰의 역할 구분
- 반복되는 UI의 공통 컴포넌트화
- 컴포넌트의 크기, 변형과 상태 체계화
- 동일한 구조에서 Light·Dark Theme 지원
- 디자인 기준과 코드 명칭의 연결
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
기초 시각 기준이 컴포넌트와 실제 화면까지 이어지는 구조로 설계했습니다.

## 4. Design Foundations & Tokens

Frame Design System은 컴포넌트부터 만드는 방식이 아니라,
UI 전반에서 반복되는 시각적 기준을 먼저 정의하는 것에서 시작했습니다.

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
여러 컴포넌트와 패턴에서 공통으로 참조할 수 있는 기준으로 정리했습니다.

### Token Structure

디자인 토큰은 역할에 따라 단계적으로 구분했습니다.

```text
Primitive Tokens
기본 색상과 수치 값
        ↓
Semantic Tokens
배경, 텍스트, 보더와 상태의 의미
        ↓
Component Tokens
버튼, 입력 요소와 카드에 적용되는 값
```

### Primitive Tokens

원시 토큰은 색상 팔레트, 간격과 크기처럼 가장 기본이 되는 값을 정의합니다.

예:
blue-500
gray-100
space-4
radius-8

원시 토큰은 직접적인 UI 역할보다 시스템의 기본 재료로 사용했습니다.

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

모든 컴포넌트에 별도의 값을 새로 만드는 것이 아니라,
필요한 경우 의미 기반 토큰을 컴포넌트 수준에서 다시 연결하는 방식으로 구성했습니다.

### Typography

타이포그래피는 단순한 글자 크기 목록보다,
정보 계층과 사용 목적을 기준으로 구분했습니다.

- Display
- Heading
- Body
- Label
- Caption

각 스타일은 글자 크기, 굵기, 줄 높이와 자간을 함께 정의해
화면마다 텍스트 규칙이 달라지지 않도록 했습니다.

### Spacing

간격은 임의의 값을 반복해서 사용하는 대신,
일정한 단계의 스케일로 정의했습니다.

4 → 8 → 12 → 16 → 24 → 32 → 48 → 64

이 스케일을 컴포넌트 내부 여백, 요소 간 간격과 페이지 레이아웃에 공통으로 적용했습니다.

### Foundation Outcome

Foundation과 토큰을 먼저 정의함으로써 다음과 같은 기준을 마련했습니다.

- 시각적 값의 중복 감소
- 화면과 컴포넌트 간 일관성 유지
- 테마 변경 시 수정 범위 축소
- 새로운 UI 요소를 추가할 때 참고할 공통 기준 확보

## 5. Component System

디자인 토큰을 실제 UI에 적용하기 위해 
반복적으로 사용되는 요소를 공통 컴포넌트로 구현했습니다.

컴포넌트는 단순한 형태뿐 아니라 
사용 목적, 크기, 변형과 상태를 함께 정의했습니다.

### Core Components

주요 컴포넌트는 다음과 같습니다.

- Button
- Input
- Select
- Checkbox
- Radio
- Switch
- Badge
- Card
- Modal
- Tabs
- Accordion
- Tooltip

### Variants and Sizes

동일한 컴포넌트가 화면마다 별도 스타일로 분리되지 않도록,
속성을 통해 목적과 크기를 변경할 수 있게 구성했습니다.

예:
```jsx
<Button variant="primary" size="medium">
  Confirm
</Button>

<Button variant="secondary" size="medium">
  Cancel
</Button>
```
버튼의 역할과 위계가 코드에서도 명확하게 드러나도록
variant와 size를 구분했습니다.

### Component States

컴포넌트는 기본 상태뿐 아니라 
실제 사용 과정에서 필요한 상호작용 상태를 함께 정의했습니다.

- Default
- Hover
- Focus
- Active
- Selected
- Disabled
- Error

특히 Focus 상태는 현재 조작 중인 요소를 확인할 수 있도록 하고,
Error 상태는 입력 문제와 수정이 필요한 지점을 명확하게 인지할 수 있도록 구성했습니다.

### Form Components

입력 요소는 개별 필드뿐 아니라 
라벨, 도움말과 오류 메시지를 포함한 하나의 사용 단위로 구성했습니다.

Label
  ↓
Input / Select
  ↓
Helper Text or Error Message

이를 통해 화면마다 라벨 위치와 오류 표현 방식이 달라지지 않도록
공통 규칙을 적용했습니다.

### Cards and Content Components

카드는 콘텐츠 유형에 따라 표현은 달라질 수 있지만,
공통적인 구조와 간격 기준을 공유하도록 구성했습니다.

- Image or Icon
- Title
- Description
- Metadata
- Action

이 기준은 제품 카드, 자료 카드와 정보 카드 등으로 확장할 수 있는 기본 구조가 되었습니다.

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

공통 컴포넌트를 사용함으로써 
버튼, 입력 요소와 상태 표현이 화면마다 다르게 구현되는 것을 줄이고, 
동일한 규칙을 반복해서 적용할 수 있도록 했습니다.

컴포넌트화의 목적은 코드량을 줄이는 것에만 있지 않고,
디자인과 인터랙션 기준을 여러 화면에서 일관되게 유지하는 데 있었습니다.

## 6. Theme & Interaction States

Frame Design System은 동일한 컴포넌트 구조를 유지하면서,
의미 기반 토큰 값을 전환해 Light와 Dark Theme을 지원하도록 구성했습니다.

### Theme Principle

테마별로 컴포넌트 스타일을 다시 작성하지 않고,
배경, 텍스트, 보더와 상태 색상에 연결된 토큰 값을 변경하는 방식으로 구현했습니다.

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
테마가 변경돼도 컴포넌트의 정보 계층과 사용 목적이 유지되도록 했습니다.

### Theme Consistency

Light와 Dark Theme에서 단순히 배경색만 반전하지 않고,
텍스트 대비, 경계선, 입력 상태와 주요 행동의 위계를 함께 조정했습니다.

이를 통해 동일한 컴포넌트가 테마에 따라 
서로 다른 요소처럼 보이지 않도록 시각적 관계를 유지했습니다.

### Interaction States

컴포넌트의 상태는 다음과 같이 구분했습니다.

- Default
- Hover
- Focus
- Active
- Selected
- Disabled
- Error

Focus 상태는 현재 조작 중인 요소를 확인할 수 있도록 하고,
Error 상태는 입력 문제와 수정이 필요한 지점을 명확하게 인지할 수 있도록 구성했습니다.

Selected와 Disabled 상태도 색상 차이만으로 표현하지 않고,
보더, 배경과 투명도 등 여러 시각적 단서를 함께 사용했습니다.

### State Principle

상태 표현은 컴포넌트마다 개별적으로 결정하지 않고,
동일한 상호작용은 동일한 방식으로 인지되도록 공통 기준을 적용했습니다.

이를 통해 사용자가 버튼, 입력 요소와 선택 컴포넌트를 
화면마다 새롭게 해석하지 않도록 했습니다.

## 7. Design-to-Code

Frame Design System에서는 디자인 기준과 코드 구현이 서로 다른 구조로 관리되지 않도록, 
토큰과 컴포넌트의 명칭과 역할을 일관되게 연결하는 데 집중했습니다.

### Connection Structure

```text
Design Foundation
        ↓
Design Token
        ↓
CSS Custom Property
        ↓
React Component
        ↓
UI Pattern
```

피그마에서 정의한 시각적 기준을 
CSS 사용자 정의 속성과 React 컴포넌트로 옮기고, 
실제 화면에서 반복적으로 사용되는 패턴까지 연결했습니다.

### CSS Token Implementation

컬러, 타이포그래피, 간격, 반경과 그림자 값을 공통 CSS 변수로 관리했습니다.

:root {
  --color-primary: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-text-primary: ...;
  --space-4: ...;
  --radius-medium: ...;
  --shadow-card: ...;
}

컴포넌트 내부에서 같은 값을 반복해서 작성하지 않고,
각 요소가 맡은 역할에 맞는 토큰을 참조하도록 구성했습니다.

### Naming Alignment

디자인과 코드에서 동일한 개념을 서로 다른 이름으로 표현하면
협업 과정에서 기준을 해석하는 비용이 커질 수 있습니다.

이를 줄이기 위해 토큰과 컴포넌트의 명칭을 
역할 중심으로 정리했습니다.

- Primitive
blue-600

- Semantic
color-primary

- Component
button-primary-background

이 구조를 통해 값의 출처와 실제 적용 목적을 
단계적으로 확인할 수 있도록 했습니다.

### Component API

컴포넌트는 사용 목적과 크기, 상태가 코드에서도 명확하게 드러나도록 속성을 구성했습니다.

<Button variant="primary" size="medium">
  Confirm
</Button>

<Button variant="secondary" size="medium">
  Cancel
</Button>

화면마다 별도의 버튼 스타일을 만드는 대신,
정의된 변형과 크기를 조합해 동일한 규칙을 반복해서 사용할 수 있도록 했습니다.

### Documentation

컴포넌트 문서에는 다음 내용을 포함했습니다.

- Purpose
- Variants
- Sizes
- States
- Usage Example
- Interaction
- Accessibility Considerations

문서화는 결과 화면을 설명하는 데 그치지 않고,
디자인 기준과 구현 방식을 
다른 사람이 동일하게 이해하고 적용할 수 있도록 하기 위한 과정이었습니다.

### What Design-to-Code Means Here

이 프로젝트에서 Design-to-Code는 자동 동기화나 패키지 배포를 의미하지 않습니다.

디자인에서 정의한 원칙을 토큰과 컴포넌트 구조로 옮기고,
동일한 명칭과 역할을 기준으로 실제 UI에 적용한 과정을 의미합니다.

## 8. Application to SLI Scientific

Frame Design System에서 정리한 토큰과 컴포넌트 설계 원칙은
다음 프로젝트인 SLI Scientific에 적용했습니다.

SLI Scientific에서는 Frame의 구조를 그대로 복제하지 않고,
B2B 과학장비 플랫폼의 정보 밀도와 사용 맥락에 맞는 UI Foundation으로 재구성했습니다.

### Applied Principles

| Frame Design System | SLI Scientific Application |
|---|---|
| Semantic color tokens | Deep Blue, Slate, Muted Cyan 기반 컬러 체계 |
| Typography scale | 제품명, 섹션 제목, 설명과 사양 정보의 계층 |
| Spacing rules | 페이지 섹션과 콘텐츠 그룹의 공통 간격 |
| Button variants | 주요 행동, 보조 행동과 텍스트 링크 구분 |
| Card principles | Product, Resource, Support 카드에 적용 |
| Layout rules | 공통 컨테이너와 페이지 정렬 기준 |
| Responsive rules | Desktop, Tablet, Mobile 레이아웃 전환 |
| Component states | Hover, Focus, Selected, Disabled 상태 표현 |

### Contextual Extension

과학장비 플랫폼의 콘텐츠 특성에 맞춰 다음 기준을 확장했습니다.

- 긴 제품명과 모델명을 수용하는 카드 구조
- 기술 사양과 문서를 위한 높은 정보 밀도
- 제품 이미지와 텍스트 정보의 균형
- 모델 선택과 제품 문의 흐름
- 모바일 환경에서의 제품 상세 재배치
- B2B 서비스에 맞는 차분한 시각 체계

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
실제 B2B 플랫폼의 화면과 인터랙션에 어떻게 적용되는지 확인했습니다.

Related Project
[SLI Scientific Case Study] (https://github.com/moimoiyk80-maker/platform-redesign/blob/main/docs/case-study.md)

## 9. Outcome & Reflection

### Outcome

Frame Design System을 통해 개별 화면에서 반복되던 시각적 값과 UI 요소를 
토큰, 컴포넌트, 상태와 패턴의 구조로 정리했습니다.

주요 결과는 다음과 같습니다.

- 컬러, 타이포그래피, 간격과 시각 속성의 공통 기준 정의
- 원시 토큰, 의미 기반 토큰과 컴포넌트 토큰의 역할 구분
- 주요 UI 컴포넌트와 변형, 크기, 상태 구현
- Light·Dark Theme 적용
- 입력, 검색, 필터와 모달 등 반복 UI 패턴 구성
- 디자인 기준과 CSS 토큰, React 컴포넌트의 명칭 연결
- 컴포넌트 사용 방식과 상태 문서화
- SLI Scientific 프로젝트에 시스템 설계 원칙 적용

### What This Project Demonstrates

```text
개별 UI 구현
        ↓
반복되는 규칙 발견
        ↓
디자인 토큰과 컴포넌트 체계화
        ↓
실제 제품 UI에 적용
```

이 프로젝트는 컴포넌트를 많이 구현했다는 점보다, 시각적 기준과 인터랙션 원칙을 
여러 화면에서 일관되게 사용할 수 있는 구조로 정리했다는 데 의미가 있습니다.

### What I Learned

디자인 시스템은 컬러와 컴포넌트를 한곳에 모아두는 문서가 아니라,
디자인 판단과 구현 기준을 반복해서 사용할 수 있도록 만드는 공통 언어라는 점을 확인했습니다.

특히 값의 명칭을 역할 중심으로 정의하면 
테마와 브랜드가 달라져도 컴포넌트의 목적과 정보 계층을 유지할 수 있었습니다.

또한 컴포넌트는 형태만 정의하는 것으로 끝나지 않고,
상태, 사용 맥락과 다른 요소와의 조합까지 함께 고려해야 
실제 화면에서 안정적으로 사용할 수 있다는 점을 경험했습니다.

### Challenges

가장 어려웠던 부분은 모든 값을 세분화하는 것과
실제로 필요한 기준만 정의하는 것 사이의 균형이었습니다.

토큰이나 컴포넌트 변형을 지나치게 많이 만들면 시스템이 복잡해지고,
너무 적게 만들면 화면마다 예외 스타일이 늘어날 수 있습니다.

따라서 반복되는 사용 사례를 기준으로 공통 규칙을 우선 정의하고,
특정 화면에만 필요한 값은 시스템 전체의 기준으로 확대하지 않도록 범위를 조정했습니다.

### Limitations

본 프로젝트는 실제 조직에서 여러 디자이너와 개발자가 함께 운영한 디자인 시스템이 아니라, 
포트폴리오 범위에서 설계하고 구현한 프로젝트입니다.

따라서 다음 항목은 구현 범위에 포함하지 않았습니다.

- 디자인 토큰 자동 변환 및 배포
- npm 컴포넌트 패키지 배포
- Storybook 기반 문서 사이트
- 버전 관리와 변경 이력 정책
- 다수 제품에서의 운영 검증
- 실제 팀 단위 기여 및 승인 프로세스

대신 디자인 기준을 토큰과 React 컴포넌트로 연결하고,
다음 프로젝트에 적용할 수 있는 구조를 만드는 데 집중했습니다.

### Connection to the Next Project

Frame Design System에서 정리한 시스템 설계 원칙은
SLI Scientific에서 실제 B2B 정보구조와 제품 탐색 UI에 적용했습니다.

Minimal Ecommerce
UI와 인터랙션 구현
        ↓
Frame Design System
토큰과 컴포넌트 체계화
        ↓
SLI Scientific
실무형 IA·UX 문제에 적용

이를 통해 화면 구현, 디자인 시스템과 실무 UX 설계를 서로 분리된 결과물이 아니라 
단계적으로 확장되는 하나의 과정으로 연결했습니다.

## Links

- [Live Demo](frame-design-system.vercel.app/)
- [SLI Scientific Project](platform-redesign-five.vercel.app)