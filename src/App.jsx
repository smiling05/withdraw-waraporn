import React, { useState } from 'react';

const App = () => {
  const [balance, setBalance] = useState(10000);
  const [amount, setAmount] = useState('');
  const [history, setHistory] = useState([]);

  const withdraw = () => {
    const withdrawalAmount = parseInt(amount);
    if (!isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= balance) {
      const newBalance = balance - withdrawalAmount;
      setBalance(newBalance);
      const transaction = `ถอน: ${withdrawalAmount} บาท | คงเหลือ: ${newBalance} บาท`;
      setHistory([transaction, ...history]);
      setAmount('');
    } else {
      alert('กรุณากรอกจำนวนเงินที่ถูกต้อง!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Withdrawal Section */}
        <div className="flex-1 bg-white border border-gray-300 rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold mb-4">ระบบถอนเงิน</h2>
          <p className="text-lg mb-4">ยอดเงินคงเหลือ: {balance} บาท</p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
            <button
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => setAmount(100)}
            >
              ถอน 100 บาท
            </button>
            <button
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => setAmount(500)}
            >
              ถอน 500 บาท
            </button>
            <button
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => setAmount(1000)}
            >
              ถอน 1,000 บาท
            </button>
            <button
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => setAmount(5000)}
            >
              ถอน 5,000 บาท
            </button>
          </div>
          <div className="mt-4">
            <label className="block font-semibold mb-2">จำนวนเงินที่ต้องการถอน:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="ป้อนจำนวนเงิน"
            />
            <button
              className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
              onClick={withdraw}
            >
              ถอนเงิน
            </button>
          </div>
        </div>

        {/* History Section */}
        <div className="flex-1 bg-white border border-gray-300 rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold mb-4">ประวัติการถอนเงิน</h2>
          {history.length > 0 ? (
            <ul className="space-y-2">
              {history.map((entry, index) => (
                <li key={index} className="flex justify-between p-2 border-b border-gray-300">
                  <span>{entry.split('|')[0]}</span>
                  <span>{entry.split('|')[1]}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">ยังไม่มีประวัติการถอนเงิน</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;