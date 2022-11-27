const MESSAGETYPE_CREATE_TODO = "createTodo";
const MESSAGETYPE_EDIT_TODO = "editTodo";

const createMessageDto = {
  type: MESSAGETYPE_CREATE_TODO,
  data: {
    title: "",
    content: "",
    tag: "",
  },
};

const editMessageDto = {
  type: MESSAGETYPE_EDIT_TODO,
  data: {
    id: 0,
    title: "",
    content: "",
    tag: "",
  },
};

export { createMessageDto, editMessageDto };
