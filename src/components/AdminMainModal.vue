<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="main-modal-estimate-container">
            <div class="main-modal-title">
                이용사례
              <div class="admin-main-modal-ongoing-reg-code">(접수번호: <input type="text" class="form-control-file-reg-code" placeholder="접수번호 7자리" v-model="usecase.reg_code"/>)</div>
              <b-icon-x
                style="cursor: pointer"
                @click="$emit('close')"
              ></b-icon-x>
            </div>
            <div
              style="
                height: 1px;
                background-color: #d4d4d4;
                margin-top: 10px;
                margin-bottom: 20px;
              "
            ></div>
            <div class="row" style="margin: 0 auto">   
                <div
                    class="admin-input-title col-2"
                    style="text-align: left;"
                    >
                    이미지
                    </div>
                    <div class="col-6  section-space--bottom--20">
                    <input
                        type="file"
                        multiple
                        class="form-control-file"
                        style="padding-top:10px"
                        id="banner_image"
                        ref="main_modal_image"
                        v-on:change="handleFileUpload()"
                    />
                </div>
            </div>
            <div class="main-modal-head-container">
              <div class="main-modal-head-title"><input type="text" placeholder="업체명" class="form-control-file-title" v-model="usecase.business_name"/></div>
              <div class="admin-main-modal-head-subtitle row"><input type="text" class="form-control-file-address col-7" placeholder="주소" v-model="usecase.address"/> | <input type="text" placeholder="구분" class="form-control-file-sector col-3" v-model="usecase.sector"/></div>
            </div>
            <div class="main-modal-info-container">
              <div class="main-modal-info-wrapper">
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">매장평수</div>
                  <div class="admin-main-modal-info-bold">
                    <input type="text" class="form-control-file-number" v-model="usecase.py"/>평
                  </div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">파트너스</div>
                  <div class="admin-main-modal-info-bold"><input type="text" class="form-control-file-number" v-model="usecase.partners_num"/>개</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">평균견적</div>
                  <div class="admin-main-modal-info-bold"><input type="text" class="form-control-file-number" v-model="usecase.avg_est"/>만원</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">최저견적</div>
                  <div class="admin-main-modal-info-bold"><input type="text" class="form-control-file-number" v-model="usecase.min_est"/>만원</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">정부지원금</div>
                  <div class="admin-main-modal-info-bold"><input type="text" class="form-control-file-number" v-model="usecase.fund"/>만원</div>
                </div>
              </div>
            </div>
            <LazyHydrate ssr-only>
                <div class="editor">
                <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
                <div class="menubar">
                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bold() }"
                    @click="commands.bold"
                    >
                    <img class="icon" src="../assets/tiptap/icons/bold.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.italic() }"
                    @click="commands.italic"
                    >
                    <img class="icon" src="../assets/tiptap/icons/italic.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.strike() }"
                    @click="commands.strike"
                    >
                    <img class="icon" src="../assets/tiptap/icons/strike.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.underline() }"
                    @click="commands.underline"
                    >
                    <img class="icon" src="../assets/tiptap/icons/underline.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code() }"
                    @click="commands.code"
                    >
                    <img class="icon" src="../assets/tiptap/icons/code.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.paragraph() }"
                    @click="commands.paragraph"
                    >
                    <img class="icon" src="../assets/tiptap/icons/paragraph.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                    @click="commands.heading({ level: 1 })"
                    >
                    H1
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    @click="commands.heading({ level: 2 })"
                    >
                    H2
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    @click="commands.heading({ level: 3 })"
                    >
                    H3
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bullet_list() }"
                    @click="commands.bullet_list"
                    >
                    <img class="icon" src="../assets/tiptap/icons/ul.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.ordered_list() }"
                    @click="commands.ordered_list"
                    >
                    <img class="icon" src="../assets/tiptap/icons/ol.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.blockquote() }"
                    @click="commands.blockquote"
                    >
                    <img class="icon" src="../assets/tiptap/icons/quote.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    @click="showImagePrompt(commands.image)"
                    >
                    <img class="icon" src="../assets/tiptap/icons/image.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    @click="commands.horizontal_rule"
                    >
                    <img class="icon" src="../assets/tiptap/icons/hr.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    @click="commands.undo"
                    >
                    <img class="icon" src="../assets/tiptap/icons/undo.svg"/>
                    </button>

                    <button
                    class="menubar__button"
                    @click="commands.redo"
                    >
                    <img class="icon" src="../assets/tiptap/icons/redo.svg"/>
                    </button>
                    <button
						class="menubar__button"
						@click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
					>
                    <img class="icon" src="../assets/tiptap/icons/table.svg"/>
					</button>

					<span v-if="isActive.table()">
						<button
							class="menubar__button"
							@click="commands.deleteTable"
						>
                        <img class="icon" src="../assets/tiptap/icons/delete_table.svg"/>
						</button>
						<button
							class="menubar__button"
							@click="commands.addColumnBefore"
						>
                        <img class="icon" src="../assets/tiptap/icons/add_col_before.svg"/>
						</button>
						<button
							class="menubar__button"
							@click="commands.addColumnAfter"
						>
                        <img class="icon" src="../assets/tiptap/icons/add_col_after.svg"/>
						</button>
						<button
							class="menubar__button"
							@click="commands.deleteColumn"
						>
                        <img class="icon" src="../assets/tiptap/icons/delete_col.svg"/>
						</button>
						<button
							class="menubar__button"
							@click="commands.addRowBefore"
						>
                        <img class="icon" src="../assets/tiptap/icons/add_row_before.svg"/>
						</button>
						<button
							class="menubar__button"
							@click="commands.addRowAfter"
						>
                        <img class="icon" src="../assets/tiptap/icons/add_row_after.svg"/>
						</button>
						<button
							class="menubar__button"
							@click="commands.deleteRow"
						>
                        <img class="icon" src="../assets/tiptap/icons/delete_row.svg"/>
						</button>
						<button
							class="menubar__button"
							@click="commands.toggleCellMerge"
						>
                        <img class="icon" src="../assets/tiptap/icons/combine_cells.svg"/>
						</button>
					</span>

                </div>
                </editor-menu-bar>
                <editor-content class="editor__content main-modal-partners-container" :editor="editor" />
            </div>
            </LazyHydrate>
            
            <button @click="makeUsecase()">작성하기</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import MainEstimateGrid from "../components/MainEstimateGrid";
import ICountUp from "vue-countup-v2";
import carousel from "vue-owl-carousel2";
import LazyHydrate from 'vue-lazy-hydration';

import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Table,
	TableHeader,
	TableCell,
	TableRow,
  Strike,
  Image,
  Underline,
  History,
} from 'tiptap-extensions'

import axios from "axios";

export default {
  props:['id'],
  components: {
    MainEstimateGrid,
    carousel,
    ICountUp,
    EditorContent,
    EditorMenuBar,
    LazyHydrate,
  },
  data() {
    return {
      usecase: {},
      loading: true,
      content: "",
      editor: ""
    };
  },
  methods: {
      showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
    makeUsecase() {
        this.usecase.content = this.content
        console.log(this.usecase)
        this.$emit('confirm', this.usecase)
    },
    handleFileUpload() {
        this.usecase.images = this.$refs.main_modal_image.files
    }
  },
  mounted() {
        this.editor = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Image(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Table({
                resizable: true,
            }),
            new TableHeader(),
            new TableCell(),
            new TableRow(),
        ],
        onUpdate: ({ getHTML }) => {
            this.html=getHTML();
            if (this.html === '<p></p>')this.content = '';
            else this.content = this.html;
        },
        content: `<p>여기에 내용을 입력하세요.</p>`,
      })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
};
</script>
<style lang="stylus" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background: #fff;
    border-radius: 4px;
    
  }

  &-content {
    padding: 10px 20px;
    padding-bottom: 30px;
  }

  &-footer {
    background: #ccc;
    padding: 10px;
    text-align: right;
  }
}

// 오버레이 트랜지션
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  // 오버레이에 포함되어 있는 모달 윈도의 트랜지션
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// 딜레이가 적용된 모달 윈도가 제거된 후에 오버레이가 사라짐
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.modal {
  &-content {
    padding: 25px 30px;
    padding-bottom: 15px;
  }
}
</style>

<style>
.form-control-file-reg-code {
    height: 25px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: -3px;
}
.form-control-file-title {
    height: 35px;
    margin-bottom: 10px;
}
.form-control-file-address {
    margin-right: 5px;
}
.form-control-file-sector{
    margin-left: 5px;
}
.form-control-file-number {
    width: 100px;
    height: 40px;
}
.main-modal-estimate-container {
  width: 863px;
}
.main-modal-title {
  font-size: 21px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.main-modal-reg-code {
  position: absolute;
  font-size: 12px;
  top: 12px;
  left: 280px;
}
.admin-main-modal-ongoing-reg-code {
  position: absolute;
  font-size: 12px;
  top: 12px;
  left: 200px;
  display: flex;
}
.main-modal-image-container {
  max-width: 425px;
  margin: 0 auto;
}
.main-modal-image {
  max-width: 425px;
  max-height: 287px;
  object-fit: cover;
  object-position: 50%;
}
.main-modal-no-partners-container {
  height: 250px;
  margin: 0 auto;
  text-align: center;
  padding-top: 35px;
}
.main-modal-partners-container {
  overflow-y: scroll;
  max-height: 450px;
  width: 100%;
}
.main-modal-partners-title-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}
.main-modal-partners-title-left {
  width: 3px;
  height: 22px;
  margin-top: 25px;
  margin-right: 5px;
  margin-left: 3px;
  background-color: #000;
}
.main-modal-partners-title {
  margin-top: 17px;
  font-size: 23px;
  font-family: NotoSansKR-Medium;
}
.main-modal-head-container {
  max-width: 425px;
  margin: 0 auto;
  padding: 15px;
  text-align: center;
}
.main-modal-head-title {
  font-size: 26.89px;
  font-family: NotoSansKr-Medium;
}
.admin-main-modal-head-subtitle {
    padding-left: 45px;
  font-size: 12.55px;
  margin: 0 auto;
}
.main-modal-info-container {
  width: 100%;
  height: 125px;
  border: 1px solid #f2f7ff;
  margin-top: 5px;
  border-radius: 5px;
  padding: 3px;
}
.main-modal-info-wrapper {
  height: 100%;
  background-color: #f2f7ff;
  font-size: 20.47px;
  display: flex;
  flex-direction: row;
}
.admin-modal-info-section {
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.admin-main-modal-info-light {
  margin-top: 10px;
}
.main-modal-info-bold {
  margin-top: 13px;
  color: #004eff;
  font-size: 32.93px;
}
.main-modal-info-section-divider{
  margin-top: 30px;
  height: 67px;
  width: 1px;
  background: #e0e1e2;
}
.main-estimate-text-title {
  color: rgb(94, 84, 84);
  font-size: 14px;
  
}
.main-modal-partner-container {
  margin-bottom: 13px;
}
.main-estimate-text-subtitle {
  font-size: 16px;
}
.main-modal-partner-container {
  padding: 3px;
}
@media (max-width: 1141px) {
  .main-modal-head-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 5px;
  }
  .main-estimate-mobile {
    display: none;
  }
  .main-modal-partners-container {
    max-width: 300px;
  }
  .main-estimate-text-title {
    color: rgb(94, 84, 84);
    font-size: 10px;
  }
  .main-estimate-text-subtitle {
    font-size: 12px;
  }
  .main-modal-head-image-container {
    padding-top: 5px;
  }
  .main-modal-partners-title {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 16px;
  }
  .main-modal-title {
    font-size: 16px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
  }
  .main-estimate-text-box {
    padding: 0px;
  }
}
</style>