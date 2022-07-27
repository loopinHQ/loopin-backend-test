import React from "react";

const AddTodo: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");

  return (
    <div className="w-full my-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("add todo", title);
        }}
        className="px-8 pt-6 pb-8"
      >
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow bg-slate-300 appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline placeholder-slate-800"
            id="username"
            type="text"
            placeholder="Write a new todo"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
