<template>
  <div class="mobile-navigation">
    <nav class="offcanvas-navigation" id="client-offcanvas-navigation">
      <ul>
        <li>
          <router-link to="/client">견적 요청하기</router-link>
        </li>

        <li>
          <router-link to="/clientcheck/homepage">내 견적 확인하기</router-link>
        </li>
        <li>
          <router-link to="/partners">파트너스 로그인</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MobileNavMenu",
  mounted() {
    const offCanvasNav = document.querySelector("#client-offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector(
        "#client-offcanvas-mobile-menu"
      );
      offcanvasMobileMenu.classList.remove("active");
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/0-base/_variables.scss";

/* offcanvas mobile menu */
.mobile-navigation {
  padding: 30px 20px;
}
.offcanvas-navigation {
  & > ul {
    li {
      &.menu-item-has-children {
        .sub-menu {
          height: 0;
          visibility: hidden;
          opacity: 0;
          transition: 0.3s;
        }
        &.active {
          & > .sub-menu {
            height: 100%;
            visibility: visible;
            opacity: 1;
          }
        }
      }
      & > a,
      div {
        cursor: pointer;
        color: $white;
        font-size: 14px;
        padding: 10px 0;
        display: block;
        &:hover {
          color: $white;
        }
      }
    }
  }

  ul {
    &.sub-menu {
      margin-left: 25px;
      transition: 0.3s;
      & > li {
        & > a {
          color: $white;
          font-size: 13px;
          padding: 10px 0;
          &:hover {
            color: $white;
          }
        }
      }
    }
    li {
      a {
        text-transform: uppercase;
      }

      &.menu-item-has-children {
        position: relative;
        display: block;
        a {
          display: block;
        }

        &.active {
          & > .menu-expand {
            i {
              &:before {
                transform: rotate(0);
              }
            }
          }
        }

        .menu-expand {
          position: absolute;
          right: auto;
          left: 95%;
          top: -5px;
          width: 30px;
          height: 50px;
          line-height: 50px;
          cursor: pointer;
          text-align: center;

          i {
            display: block;
            margin-top: 27px;
            border-bottom: 1px solid $white;
            position: relative;
            width: 10px;
            transition: all 250ms ease-out;
            &:before {
              width: 100%;
              content: "";
              border-bottom: 1px solid $white;
              display: block;
              position: absolute;
              top: 0;
              transform: rotate(90deg);
            }
          }
        }
      }
    }
  }
}
</style>
