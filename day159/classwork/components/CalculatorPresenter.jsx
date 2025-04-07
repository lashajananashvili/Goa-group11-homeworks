export default function CalculatorPresenter({
    num1,
    num2,
    setNum1,
    setNum2,
    result,
    onCalculate,
  }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">კალკულატორი</h2>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="პირველი რიცხვი"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="მეორე რიცხვი"
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          onClick={onCalculate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          გამოიანგარიშე ჯამი
        </button>
        {result !== null && (
          <p className="mt-4 text-lg font-semibold">ჯამი: {result}</p>
        )}
      </div>
    );
  }
  