import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

const AddTransactionForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [transaction, setTransaction] = useState({
    description: "",
    category: "",
    date: new Date(),
    transactionType: "",
    amount: "",
  });

  const [categories, setCategories] = useState([]);

  console.log(transaction);

  // Get all categories
  useEffect(async () => {
    const categories = await axios.get("/api/categories");
    setCategories(categories.data.allCategories.data);
  }, []);

  const handleAddTransaction = async () => {
    await axios.post("/api/transactions/create", transaction);
    setTransaction({
      description: "",
      category: "",
      date: new Date(),
      transactionType: "",
      amount: "",
    });
  };

  return (
    <form className="w-full max-w-sm mt-4 p-4">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Ngày:
          </label>
        </div>
        <div class="md:w-2/3">
          <DatePicker
            className="bg-gray-50 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
            selected={startDate}
            onChange={(date, e) => {
              setStartDate(date);
              setTransaction({ ...transaction, description: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Ghi chú:
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value={transaction.description}
            onChange={(e) =>
              setTransaction({ ...transaction, description: e.target.value })
            }
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Tiền chi:
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-full-name"
            type="number"
            value={transaction.amount}
            onChange={(e) =>
              setTransaction({ ...transaction, amount: e.target.value })
            }
          />
        </div>
      </div>

      {/* Category */}
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Danh mục:
          </label>
        </div>
        <div class="md:w-2/3">
          <select
            class="bg-gray-50 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            onChange={(e) =>
              setTransaction({ ...transaction, category: e.target.value })
            }
          >
            <option>Chọn danh mục</option>
            {categories.map((category) => (
              <option>{category.categoryName}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        class="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={handleAddTransaction}
      >
        Nhập khoản chi
      </button>
    </form>
  );
};

export default AddTransactionForm;
