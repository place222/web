<template>
    <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <!-- search form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">HEADER</li>
        <!-- Optionally, you can add icons to the links -->
        <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>
        <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>
        <li class="treeview">
          <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#">Link in level 2</a></li>
            <li><a href="#">Link in level 2</a></li>
          </ul>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "mainSidebar"
};
</script>


<style lang="less">
//初始化一些公用函数变量
@import "../../less/common.less";
/*
 * Component: Sidebar
 * ------------------
 */
// Main Sidebar
.main-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 50px;
  min-height: 100%;
  width: @sidebar-width;
  z-index: 810;

  // Using disposable variable to join statements with a comma
  @transition-rule: @transition-speed @transition-fn,
    width @transition-speed @transition-fn;
  .transition-transform(@transition-rule);

  @media (max-width: @screen-header-collapse) {
    padding-top: 100px;
  }

  @media (max-width: @screen-xs-max) {
    .translate(-@sidebar-width, 0);
  }

  .sidebar-collapse & {
    @media (min-width: @screen-sm) {
      .translate(-@sidebar-width, 0);
    }
  }

  .sidebar-open & {
    @media (max-width: @screen-xs-max) {
      .translate(0, 0);
    }
  }
}

.sidebar {
  padding-bottom: 10px;
}

// Remove border from form
.sidebar-form {
  input:focus {
    border-color: transparent;
  }
}

// Sidebar user panel
.user-panel {
  position: relative;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  .clearfix();
  > .image > img {
    width: 100%;
    max-width: 45px;
    height: auto;
  }
  > .info {
    padding: 5px 5px 5px 15px;
    line-height: 1;
    position: absolute;
    left: 55px;
    > p {
      font-weight: 600;
      margin-bottom: 9px;
    }
    > a {
      text-decoration: none;
      padding-right: 5px;
      margin-top: 3px;
      font-size: 11px;
      > .fa,
      > .ion,
      > .glyphicon {
        margin-right: 3px;
      }
    }
  }
}

// Sidebar menu
.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  //First Level
  > li {
    position: relative;
    margin: 0;
    padding: 0;
    > a {
      padding: 12px 5px 12px 15px;
      display: block;
      > .fa,
      > .glyphicon,
      > .ion {
        width: 20px;
      }
    }
    .label,
    .badge {
      margin-right: 5px;
    }
    .badge {
      margin-top: 3px;
    }
  }
  li.header {
    padding: 10px 25px 10px 15px;
    font-size: 12px;
  }
  li > a > .fa-angle-left,
  li > a > .pull-right-container > .fa-angle-left {
    width: auto;
    height: auto;
    padding: 0;
    margin-right: 10px;
    .transition(transform 0.5s ease);
  }
  li > a > .fa-angle-left {
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -8px;
  }

  .menu-open {
    > a > .fa-angle-left,
    > a > .pull-right-container > .fa-angle-left {
      .rotate(-90deg);
    }
  }
  .active > .treeview-menu {
    display: block;
  }
}
</style>
