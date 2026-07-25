# Frame Design System

컬러, 타이포그래피와 간격을 디자인 토큰으로 구조화하고, 일관된 컴포넌트와 테마로 확장한 React 기반 디자인 시스템 프로젝트

개별 화면을 반복해서 스타일링하는 방식에서 벗어나, 시각적 기준을 토큰으로 정의하고 
이를 버튼, 입력 요소, 카드, 모달과 테마에 일관되게 적용하는 과정을 설계하고 구현했습니다.

## Project Links

- [Live Demo](https://frame-design-system.vercel.app)
- [View Case Study](./docs/case-study.md)
- [SLI Scientific Application](https://platform-redesign-five.vercel.app)

---

## Preview

### Light Mode

![Light Mode](./readme/light.png)

### Dark Mode

![Dark Mode](./readme/dark.png)

### Modal

![Modal](./readme/modal.png)

---

## Project Overview

Frame Design System은 컬러, 타이포그래피, 간격, 레이아웃과 모션을 디자인 토큰으로 구조화하고, 
이를 공통 컴포넌트와 테마에 적용한 React 기반 디자인 시스템 프로젝트입니다.

개별 UI를 만드는 데 그치지 않고, 
여러 화면에서 동일한 시각적 규칙과 인터랙션을 유지할 수 있는 
기준을 설계하는 데 집중했습니다.

## Why This Project

Minimal Ecommerce를 구현하면서 버튼, 카드, 간격과 상태 표현이 여러 화면에서 반복되고, 
개별 컴포넌트마다 기준을 다르게 적용하면 UI 일관성을 유지하기 어렵다는 점을 확인했습니다.

이를 계기로 화면 단위 구현에서 한 단계 확장해
컬러, 타이포그래피, 간격과 상태를 공통 규칙으로 정의하고
컴포넌트와 테마에 적용하는 디자인 시스템을 구축했습니다.

```text
React UI 구현
        ↓
반복되는 시각 규칙 발견
        ↓
디자인 토큰과 컴포넌트 체계화
```

---

## Design System Structure

Frame Design System은 시각적 기준에서 시작해 
실제 UI 패턴으로 확장되는 구조로 설계했습니다.

```text
Design Foundations
        ↓
Design Tokens
        ↓
Components
        ↓
Patterns
        ↓
Theme Application
```

### Design Foundations

UI 전반에서 반복되는 시각적 기준을 먼저 정의했습니다.

- Color
- Typography
- Spacing
- Radius
- Shadow
- Layout
- Motion

각 기준을 개별 화면의 스타일 값으로 직접 작성하지 않고,
여러 컴포넌트에서 공유할 수 있는 토큰 구조로 정리했습니다.

### Design Tokens

디자인 토큰은 시각적 값을 목적에 따라 구분해 관리했습니다.

- Primitive Tokens : 원시 색상과 기본 수치

- Semantic Tokens : 텍스트, 배경, 보더와 상태의 역할

- Component Tokens : 버튼, 입력 요소와 카드에 적용되는 값

예를 들어 특정 색상 값을 컴포넌트에 직접 사용하는 대신,
primary, surface, text, border와 같은 의미 기반 토큰을 사용해 
테마가 변경되어도 UI의 역할이 유지되도록 구성했습니다.

### Components

토큰을 기반으로 반복되는 UI 요소를 공통 컴포넌트로 구현했습니다.

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

각 컴포넌트는 크기, 상태와 사용 목적에 따라 변형할 수 있도록 구성했습니다.

### Component States

컴포넌트의 기본 형태뿐 아니라 사용 과정에서 발생하는 상태를 함께 정의했습니다.

- Default
- Hover
- Focus
- Active
- Selected
- Disabled
- Error

이를 통해 화면마다 상태 표현이 달라지지 않고, 동일한 상호작용 규칙을 유지할 수 있도록 했습니다.

### Patterns

개별 컴포넌트를 조합해 실제 화면에서 반복적으로 사용되는 UI 패턴으로 확장했습니다.

- Form Field
- Search Interface
- Filter Group
- Card Group
- Modal Action
- Empty State
- Navigation Pattern

개별 컴포넌트의 정의에 그치지 않고,
실제 화면에서 함께 사용되는 구성과 인터랙션 패턴까지 확장했습니다.

---

## Design-to-Code

Frame Design System에서는 디자인 기준과 코드 구현이 분리되지 않도록 
동일한 구조와 명칭을 유지하는 데 집중했습니다.

```text
Figma Foundation
        ↓
Design Token
        ↓
CSS Custom Property
        ↓
React Component
        ↓
UI Pattern
```

### Token Implementation

컬러, 간격, 타이포그래피와 기타 시각적 값을 CSS 사용자 정의 속성으로 관리했습니다.

:root {
  --color-primary: ...;
  --color-surface: ...;
  --color-text-primary: ...;
  --space-4: ...;
  --radius-medium: ...;
  --shadow-card: ...;
}

컴포넌트 내부에 시각적 값을 반복해서 작성하지 않고,
공통 토큰을 참조하도록 구성했습니다.

### Semantic Naming

토큰 이름은 단순한 색상이나 수치보다 UI에서 수행하는 역할을 기준으로 정의했습니다.

blue-600
→ 원시 값

color-primary
→ 주요 행동 색상

color-surface
→ 콘텐츠 배경

color-text-muted
→ 보조 텍스트

이 방식은 시각 스타일이 변경돼도 컴포넌트의 의미와 사용 목적을 유지할 수 있도록 합니다.

### Component Variants

하나의 컴포넌트를 화면마다 새로 만들지 않고, 
속성을 통해 스타일과 상태를 변경할 수 있도록 구성했습니다.

<Button variant="primary" size="medium">
  Confirm
</Button>

<Button variant="secondary" size="medium">
  Cancel
</Button>

버튼의 사용 목적, 크기와 상태가 명시적으로 드러나도록 해
디자인 기준과 구현 방식이 일치하도록 했습니다.

### Theme Application

동일한 컴포넌트 구조를 유지하면서 의미 기반 토큰 값을 변경해
Light와 Dark Theme을 적용했습니다.

테마별로 컴포넌트 스타일을 다시 작성하지 않고 
배경, 텍스트, 보더와 상태 색상에 연결된 토큰 값을 전환하는 방식으로 구현했습니다.

```text
Component Structure
        +
Semantic Tokens
        ↓
Light Theme / Dark Theme
```

주요 테마 토큰은 다음과 같습니다.

- color-background
- color-surface
- color-text-primary
- color-text-secondary
- color-border
- color-primary
- color-focus

각 토큰은 특정 색상값보다 UI에서 수행하는 역할을 기준으로 정의했습니다.

이를 통해 테마가 변경돼도 
버튼, 입력 요소, 카드와 모달의 정보 계층과 사용 목적이 유지되도록 했습니다.

동일한 컴포넌트 구조에서 Light와 Dark Theme을 지원하고,
화면별 개별 색상 수정을 줄일 수 있는 구조를 구성했습니다.

### Documentation

각 컴포넌트는 다음 내용을 확인할 수 있도록 문서화했습니다.

- Purpose
- Variants
- Sizes
- States
- Usage Example
- Interaction
- Accessibility Considerations

문서화의 목적은 컴포넌트 목록을 보여주는 것이 아니라,
디자이너와 개발자가 동일한 기준으로 UI를 이해하고 사용할 수 있도록 하는 것이었습니다.

- [Case Study](./docs/case-study.md)

---

## Application to SLI Scientific

Frame Design System에서 정리한 토큰과 컴포넌트 설계 원칙은
다음 프로젝트인 SLI Scientific에 적용했습니다.

SLI Scientific에서는 Frame의 구조를 그대로 복제하기보다,
B2B 과학장비 플랫폼의 정보 밀도와 전문적인 브랜드 맥락에 맞게
UI Foundation으로 재구성했습니다.

### Applied Principles

| Frame Design System | SLI Scientific |
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

SLI Scientific의 사용 맥락에 맞춰 다음 부분을 확장했습니다.

- 긴 제품명과 모델명을 수용하는 카드 구조
- 기술 사양과 문서를 위한 높은 정보 밀도
- 제품 이미지와 텍스트 정보의 균형
- 모델 선택과 문의 흐름
- 모바일 환경에서의 제품 상세 재배치
- B2B 서비스에 맞는 차분한 시각 체계

이를 통해 디자인 토큰과 컴포넌트 원칙이
실제 B2B 플랫폼의 화면과 인터랙션에 어떻게 적용되는지 검증했습니다.

- [Live SLI Scientific](platform-redesign-five.vercel.app)

---
