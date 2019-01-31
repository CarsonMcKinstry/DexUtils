import styled from '../styled-components';

export const EditorContainer = styled.div`
  box-sizing: border-box;
  grid-area: editor;
  /* background-color: #000000 !important; */
  /* color: #dedede !important; */
  .jsoneditor {
    border: 0;
  }

  .jsoneditor-menu {
    background-color: ${props => props.theme.editor};
    border-bottom-color: ${props => props.theme.editor};
  }

  .jsoneditor-statusbar {
    background-color: ${props => props.theme.editor};
  }

  .ace_content {
    background: ${props => props.theme.editor} !important;
  }
  .ace_gutter {
    background: ${props => props.theme.editor} !important;
    color: #dedede !important;
  }
  .ace_print-margin {
    width: 1px !important;
    background: #1a1a1a !important;
  }

  .ace_cursor {
    color: #9f9f9f !important;
  }

  .ace_marker-layer .ace_selection {
    background: #424242 !important;
  }
  .ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px #000000 !important;
  }
  .ace_marker-layer .ace_step {
    background: rgb(102, 82, 0) !important;
  }
  .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px !important;
    border: 1px solid #888888 !important;
  }
  .ace_marker-layer .ace_highlight {
    border: 1px solid rgb(110, 119, 0) !important;
    border-bottom: 0 !important;
    box-shadow: inset 0 -1px rgb(110, 119, 0) !important;
    margin: -1px 0 0 -1px !important;
    background: rgba(255, 235, 0, 0.1) !important;
  }
  .ace_marker-layer .ace_active-line {
    background: ${props => props.theme.editorActiveLine} !important;
  }
  .ace_gutter-active-line {
    background-color: ${props => props.theme.editorActiveLine} !important;
  }
  .ace_stack {
    background-color: rgb(66, 90, 44) !important;
  }
  .ace_marker-layer .ace_selected-word {
    border: 1px solid #888888 !important;
  }
  .ace_invisible {
    color: #343434 !important;
  }
  .ace_keyword,
  .ace_meta,
  .ace_storage,
  .ace_storage.ace_type,
  .ace_support.ace_type {
    color: #c397d8 !important;
  }
  .ace_keyword.ace_operator {
    color: #70c0b1 !important;
  }
  .ace_constant.ace_character,
  .ace_constant.ace_language,
  .ace_constant.ace_numeric,
  .ace_keyword.ace_other.ace_unit,
  .ace_support.ace_constant,
  .ace_variable.ace_parameter {
    color: #e78c45 !important;
  }

  .ace_constant.ace_language {
    color: purple !important;
  }

  .ace_constant.ace_other {
    color: #eeeeee !important;
  }
  .ace_invalid {
    color: #ced2cf !important;
    background-color: #df5f5f !important;
  }
  .ace_invalid.ace_deprecated {
    color: #ced2cf !important;
    background-color: #b798bf !important;
  }
  .ace_fold {
    background-color: #7aa6da !important;
    border-color: #dedede !important;
  }
  .ace_entity.ace_name.ace_function,
  .ace_support.ace_function,
  .ace_variable {
    color: #7aa6da !important;
  }
  .ace_support.ace_class,
  .ace_support.ace_type {
    color: #e7c547 !important;
  }
  .ace_heading,
  .ace_markup.ace_heading,
  .ace_string {
    color: #b9ca4a !important;
  }
  .ace_entity.ace_name.ace_tag,
  .ace_entity.ace_other.ace_attribute-name,
  .ace_meta.ace_tag,
  .ace_string.ace_regexp,
  .ace_variable {
    color: #d54e53 !important;
  }
  .ace_comment {
    color: #969896 !important;
  }
  .ace_c9searchresults.ace_keyword {
    color: #c2c280 !important;
  }
  .ace_indent-guide {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC)
      right repeat-y !important;
  }
`;
