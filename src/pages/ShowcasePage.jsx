import { typography } from "../tokens/typography";
import { colors } from "../tokens/colors";
import { radius } from "../tokens/radius";
import { spacing } from "../tokens/spacing";
import { shadow } from "../tokens/shadow";
import {
  duration,
  easing
} from "../tokens/motion";
import {
  breakpoints,
  container,
  grid,
} from "../tokens/layout";

import {  useEffect,
  useState } from "react";

import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Badge from "../components/Badge/Badge";
import Tag from "../components/Tag/Tag";
import Modal from "../components/Modal/Modal";
import EmptyState from "../components/EmptyState/EmptyState";
import ProductCard from "../components/ProductCard/ProductCard";

function ShowcasePage() {
  const typographyContent = {

    display: {
      en: "Frame Design System",
      ko: "프레임 디자인 시스템",
    },
  
    h1: {
      en: "Build consistent experiences",
      ko: "일관된 사용자 경험 구축",
    },
  
    h2: {
      en: "Design tokens and components",
      ko: "디자인 토큰과 컴포넌트",
    },
  
    body: {
      en: "A scalable system for modern interfaces.",
      ko: "현대적인 인터페이스를 위한 확장 가능한 디자인 시스템입니다.",
    },
  
    caption: {
      en: "Last updated 2025",
      ko: "마지막 업데이트 2025",
    },
  
  };

  const colorGroups = {

    Brand: {
      brandPrimary:
        colors.brandPrimary,
  
      brandSecondary:
        colors.brandSecondary,
    },
  
    Accent: {
      accent:
        colors.accent,
  
      accentHover:
        colors.accentHover,
  
      accentLight:
        colors.accentLight,
    },
  
    Semantic: {
      success:
        colors.success,
  
      warning:
        colors.warning,
  
      error:
        colors.error,
  
      info:
        colors.info,
    },
  
    Neutral: {
      background:
        colors.background,
  
      surface:
        colors.surface,
  
      border:
        colors.border,
  
      text:
        colors.text,
  
      textSecondary:
        colors.textSecondary,
    },
  
  };

  const [isModalOpen,
    setIsModalOpen] =
    useState(false);

  const [theme,
      setTheme] =
      useState("light");  

      useEffect(() => {

        document.documentElement
          .setAttribute(
            "data-theme",
            theme
          );
      
      }, [theme]);

  return (
    <main className="showcase-page">

      <header className="showcase-header">
        <h1>Frame Design System</h1>
        <p>
          Design tokens and reusable UI components.
        </p>
      </header>

      <section className="token-section">

        <h2>Theme</h2>

        <p className="section-description">
        라이트·다크 테마 환경에서 일관된 사용자 경험과 충분한 색상 대비를 제공하는 테마 토큰
        </p>

        <Button
          onClick={() =>

            setTheme(
              theme === "light"
                ? "dark"
                : "light"
            )

          }
        >

          {theme === "light"
            ? "Dark Mode"
            : "Light Mode"}

        </Button>

      </section>

      <section className="token-section">

        <h2>Typography</h2>

        <p className="section-description">
        일관된 커뮤니케이션을 위한 타이포그래피 스케일과 계층 구조
        </p>
        <p className="section-description">

          Display : Sora

          {" · "}

          Body : Pretendard

        </p>

        <div className="typography-list">

          {Object.entries(typography).map(
            ([name, value]) => (

              <div
                key={name}
                className="typography-card"
              >

                <div
                  className="typography-preview"
                  style={{
                    fontFamily:
                      value.fontFamily,

                    fontSize:
                      value.fontSize,

                    fontWeight:
                      value.fontWeight,

                    lineHeight:
                      value.lineHeight,
                  }}
                >

                  <div>
                    {
                      typographyContent[
                        name
                      ].en
                    }
                  </div>

                  <div>
                    {
                      typographyContent[
                        name
                      ].ko
                    }
                  </div>

                </div>

                <div className="typography-meta">

                  <strong>
                    {name}
                  </strong>

                  <span>

                    {value.fontSize}

                    {" / "}

                    {value.fontWeight}

                    {" / "}

                    {value.lineHeight}

                  </span>

                </div>

              </div>

            )
          )}

        </div>

      </section>
      
      <section className="token-section">

        <h2>Color Tokens</h2>
      
        <p className="section-description">
        시스템 전반에 걸쳐 사용되는 시맨틱 및 브랜드 컬러 토큰
        </p>

        {Object.entries(colorGroups).map(
          ([groupName, group]) => (

            <div
              key={groupName}
              className="color-group"
            >

              <h3>
                {groupName}
              </h3>

              <div className="token-grid">

                {Object.entries(group).map(
                  ([name, value]) => (

                    <div
                      key={name}
                      className="token-card"
                    >

                      <div
                        className="color-preview"
                        style={{
                          background:
                            value,
                        }}
                      />

                      <strong>
                        {name}
                      </strong>

                      <span>
                        {value}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          )
        )}

      </section>

      <section className="token-section">
        <h2>Radius Tokens</h2>

        <p className="section-description">
        일관된 시각적 계층을 위한 코너 반경 토큰
        </p>

        <div className="token-grid">

          {Object.entries(radius).map(
            ([name, value]) => (

              <div
                key={name}
                className="token-card"
              >

                <div
                  className="radius-preview"
                  style={{
                    borderRadius: value
                  }}
                />

                <strong>{name}</strong>

                <span>{value}</span>

              </div>

            )
          )}

        </div>
      </section>

      <section className="token-section">
        <h2>Spacing Tokens</h2>

        <p className="section-description">
        일관된 레이아웃과 여백을 위한 간격 토큰
        </p>

        <div className="token-grid">

        {Object.entries(spacing).map(
            ([name, value]) => (

              <div
                key={name}
                className="token-card"
              >

                <div
                  className="spacing-preview"
                  style={{
                    width: value
                  }}
                />

                <strong>{name}</strong>

                <span>{value}</span>

              </div>

            )
         )}

        </div>
      </section>

      <section className="token-section">

        <h2>Shadow Tokens</h2>

        <p className="section-description">
        레이어와 깊이 표현을 위한 그림자 토큰
        </p>

        <div className="token-grid">

          {Object.entries(shadow).map(
            ([name, value]) => (

              <div
                key={name}
                className="token-card"
              >

                <div
                  className="shadow-preview"
                  style={{
                    boxShadow: value
                  }}
                />

                <strong>{name}</strong>

                <span>{value}</span>

              </div>

            )
          )}

        </div>

      </section>

      <section className="token-section">

        <h2>Motion Duration</h2>

        <p className="section-description">
        지속 시간(Duration)과 이징 곡선(Easing Curves)을 정의하는 모션 토큰
        </p>

        <div className="token-grid">

          {Object.entries(duration).map(
            ([name, value]) => (

              <div
                key={name}
                className="token-card"
              >

                <div className="motion-preview">

                  <div
                    className="motion-dot"
                    style={{
                      animationDuration: `${value}s`
                    }}
                  />

                </div>

                <strong>{name}</strong>

                <span>{value}s</span>

              </div>

            )
          )}

        </div>

      </section>

      <section className="token-section">

        <h2>Motion Easing</h2>

        <div className="token-grid">

          {Object.entries(easing).map(
            ([name, value]) => (

              <div
                key={name}
                className="token-card"
              >

              <div className="motion-preview">

                  <div
                    className="motion-dot-easing"
                    style={{
                      animationTimingFunction: value
                    }}
                  />

              </div>

                <strong>{name}</strong>

                <span>{value}</span>

              </div>

            )
          )}

        </div>

      </section>

      <section className="token-section">

        <h2>Buttons</h2>

        <p className="section-description">
        다양한 베리언트(Variants), 사이즈, 로딩 및 비활성화 상태를 지원하는 재사용 가능한 버튼 컴포넌트
        </p>

        <div className="button-showcase">

        <Button variant="primary">
          Primary
        </Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="ghost">
          Ghost
        </Button>

        <Button size="sm">
          Small
        </Button>

        <Button size="md">
          Medium
        </Button>

        <Button size="lg">
          Large
        </Button>

        <Button disabled>
          Disabled
        </Button>

        <Button loading>
          Loading
        </Button>

        </div>

      </section>

      <section className="token-section">

        <h2> Inputs </h2>

        <p className="section-description">
        플레이스홀더, 텍스트 입력, 유효성 검사 및 에러 상태를 지원하는 텍스트 인풋 컴포넌트
        </p>

        <div className="input-showcase">

          <Input
            label="Default"
            placeholder="Enter text"
          />

          <Input
            label="Helper Text"
            placeholder="Enter text"
            helperText="Helper message"
          />

          <Input
            label="Error"
            placeholder="Enter text"
            error="Please enter a value"
          />

          <Input
            label="Disabled"
            placeholder="Disabled input"
            disabled
          />

        </div>

      </section>

      <section className="token-section">

        <h2>Badges</h2>

        <p className="section-description">
        다양한 시맨틱 컬러(성공, 경고, 위험)를 통해 상태와 알림을 표현하는 뱃지 컴포넌트
        </p>

        <div className="badge-showcase">

          <Badge
            variant="success"
          >
            Success
          </Badge>

          <Badge
            variant="warning"
          >
            Warning
          </Badge>

          <Badge
            variant="error"
          >
            Error
          </Badge>

          <Badge
            variant="info"
          >
            Info
          </Badge>

        </div>

      </section>

      <section className="token-section">

        <h2>Tags</h2>

        <p className="section-description">
        정보의 메타데이터를 표현하고 사용자가 필터로 활용할 수 있는 재사용 태그 컴포넌트
        </p>

        <div className="tag-showcase">

          <Tag>
            Women
          </Tag>

          <Tag>
            Men
          </Tag>

          <Tag>
            Shoes
          </Tag>

          <Tag>
            Accessories
          </Tag>

          <Tag selected>
            Selected
          </Tag>

          <Tag disabled>
            Disabled
          </Tag>

        </div>

      </section>

      <section className="token-section">

        <h2>Modal</h2>

        <p className="section-description">
        스크롤 잠금(Scroll Lock) 및 키보드 네비게이션을 지원하는 오버레이 컴포넌트
        </p>

        <Button
          onClick={() =>
            setIsModalOpen(true)
          }
        >
          Open Modal
        </Button>

        <Modal
          open={isModalOpen}
          title="Delete Project"
          onClose={() =>
            setIsModalOpen(false)
          }
        >

          <p>
          Are you sure you want to delete this project?
          </p>

        </Modal>

      </section>

      <section className="token-section">

          <h2>Empty State</h2>

          <p className="section-description">
          데이터 없음(No-data) 및 검색 결과 없음(Zero-result) 상황을 처리하기 위한 디자인 패턴
          </p>
          
          <EmptyState                       
            title="No Products Found"
            description="
            Try adjusting your filters
            or search terms.
            "
            action={
              <Button>
                Reset Filters
              </Button>
            }
          />

        </section>

      <section className="token-section">

        <h2>Layout System</h2>

        <p className="section-description">
        컨테이너, 그리드, 반응형 기준을 정의하는 레이아웃 토큰
        </p>

        <div className="layout-showcase">

          <div className="layout-block">

            <h3>Containers</h3>

            {Object.entries(container).map(
              ([name, value]) => (

                <div
                  key={name}
                  className="layout-item"
                >

                  <strong>
                    {name}
                  </strong>

                  <span>
                    {value}
                  </span>

                </div>

              )
            )}

          </div>

          <div className="layout-block">

            <h3>Breakpoints</h3>

            {Object.entries(breakpoints).map(
              ([name, value]) => (

                <div
                  key={name}
                  className="layout-item"
                >

                  <strong>
                    {name}
                  </strong>

                  <span>
                    {value}
                  </span>

                </div>

              )
            )}

          </div>

          <div className="layout-block">

              <h3>Grid</h3>

              <div className="layout-item">

                <strong>
                  Columns
                </strong>

                <span>
                  {grid.columns}
                </span>

              </div>

              <div className="layout-item">

                <strong>
                  Gutter
                </strong>

                <span>
                  {grid.gutter}
                </span>

              </div>

            </div>

        </div>

      </section>

      <div className="layout-grid-preview">

        {Array.from({ length: 12 }).map(
          (_, index) => (

            <div
              key={index}
              className="grid-column"
            >
              {index + 1}
            </div>

          )
        )}

      </div>

      <section className="token-section">

        <h2>Product Card</h2>

        <p className="section-description">
        디자인 토큰을 기반으로 구성된 커머스 카드 패턴
        </p>

        <ProductCard
          title="린넨 셔츠"
          price="49,000"
          badge="New"
        />

      </section>

    </main>
  );
}

export default ShowcasePage;