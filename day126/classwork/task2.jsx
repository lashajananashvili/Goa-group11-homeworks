const names = ["გიორგი", "ნინო", "ლაშა", "საბა", "დავით"];

function NameList() {
    return (
        <div>
        <h2>სახელების სია</h2>
        <ul>
            {names.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>
        </div>
  );
}
