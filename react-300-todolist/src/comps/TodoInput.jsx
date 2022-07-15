import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

function TodoItem(props) {
  const { item, functions } = props;
  const {
    bucket_delete,
    bucket_flag_toggle,
    bucket_complete,
    bucket_item_edit,
  } = functions;
  const [bucket_IsEdit, setEdit] = useState(false);

  const bucket_edit = (e) => {
    setEdit(!bucket_IsEdit);
  };

  const bucket_edit_complete = (e, id) => {
    if (e.keyCode === 13) {
      // Enter
      bucket_item_edit(id, e.target.value);
      setEdit(false);
    } else if (e.keyCode === 27) {
      // ESC
      setEdit(false);
    }
  };

  return (
    <tr className={item.b_end_date ? "cancel" : ""}>
      <td onClick={() => bucket_flag_toggle(item.b_id)}>
        {b_flag_text[item.b_flag % 4]}
      </td>
      <td>{item.b_start_date}</td>
      {bucket_IsEdit && item.b_end_date === "" ? (
        <td>
          <input
            defaultValue={item.b_bucket}
            onKeyDown={(e) => bucket_edit_complete(e, item.b_id)}
          />
        </td>
      ) : (
        <td onClick={bucket_edit}>{item.b_bucket}</td>
      )}
      <td onClick={() => bucket_complete(item.b_id)}>{item.b_end_date}</td>
      <td onClick={() => bucket_delete(item.b_id)}>&times;</td>
    </tr>
  );
}
export default TodoInput;
