import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import Swal from "sweetalert2";

import lossSvg from "../public/loss.svg";
import profitSvg from "../public/profit.svg";
import { LOSS, PROFIT } from "../constants/transactionType";

registerLocale("vi", vi);

const AddTransactionForm = ({ transactionId, setCurrentTransaction }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(async () => {
    if (transactionId) {
      await axios
        .get(`/api/transactions/${transactionId}`)
        .then((res) => setTransaction(res.data.transaction.data[0]));
    }
  }, [transactionId]);

  const [transaction, setTransaction] = useState({
    description: "",
    categoryId: "",
    date: new Date().toLocaleDateString(),
    amount: 0,
  });

  const [categories, setCategories] = useState([]);

  const [transactionType, setTransactionType] = useState(LOSS);

  const [dynamicClassLoss, setDynamicClassLoss] = useState(
    "flex items-center justify-center cursor-pointer pb-4 border-b-4 border-lossColor"
  );

  const [dynamicClassProfit, setDynamicClassProfit] = useState(
    "flex items-center justify-center cursor-pointer pb-4"
  );

  // Get all categories
  useEffect(async () => {
    await axios.get(`/api/categories?type=${transactionType}`).then((res) => {
      setCategories(res.data.allCategories.data);
    });
  }, [transactionType]);

  const handleAddTransaction = async () => {
    if (handleValidation()) {
      // Format data after call API
      if (transactionType === LOSS) transaction.amount = -transaction.amount;

      await axios.post("/api/transactions/create", transaction).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

      Swal.fire({
        title: "Tạo mới giao dịch thành công!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      // Callback
      setCurrentTransaction(transaction);

      // Reset form
      setTransaction({
        description: "",
        categoryId: "",
        date: new Date().toLocaleDateString(),
        amount: 0,
      });
    }
  };

  const handleValidation = () => {
    if (transaction.amount === "") {
      Swal.fire({
        title: "Lỗi!",
        text: "Số tiền không được để trống",
        icon: "error",
        confirmButtonText: "OK",
      });
      return false;
    }
    if (transaction.categoryId === "") {
      Swal.fire({
        title: "Lỗi!",
        text: "Danh mục không được để trống",
        icon: "error",
        confirmButtonText: "OK",
      });
      return false;
    }
    return true;
  };

  const clear = () => {
    transactionId = null;

    // Reset form
    setTransaction({
      description: "",
      categoryId: "",
      date: new Date().toLocaleDateString(),
      amount: 0,
    });
  };

  return (
    <div class="bg-red-50 rounded-sm shadow p-4 dark:bg-dark">
      {/* Tab */}
      <div class="text-lg grid grid-cols-2 justify-between mb-6">
        <div
          class={dynamicClassLoss}
          onClick={() => {
            setTransactionType(LOSS);
            setDynamicClassLoss(
              `flex items-center justify-center cursor-pointer pb-4 border-b-4 border-lossColor`
            );
            setDynamicClassProfit(
              `flex items-center justify-center cursor-pointer pb-4`
            );
          }}
        >
          <span className="text-lossColor">Tiền chi</span>
          <Image src={lossSvg} width="36px" height="36px"></Image>
        </div>

        <div
          class={dynamicClassProfit}
          onClick={() => {
            setTransactionType(PROFIT);
            setDynamicClassLoss(
              `flex items-center justify-center cursor-pointer pb-4`
            );
            setDynamicClassProfit(
              `flex items-center justify-center cursor-pointer pb-4 border-b-4 border-profitColor`
            );
          }}
        >
          <span className="text-profitColor">Tiền thu</span>
          <Image src={profitSvg} width="36px" height="36spx"></Image>
        </div>
      </div>

      {/* Form */}
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Ngày
            </label>
          </div>
          <div class="md:w-2/3">
            <DatePicker
              className="bg-gray-50 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
              locale="vi"
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setTransaction({
                  ...transaction,
                  date: date.toLocaleDateString(),
                });
              }}
              value={transaction.date}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Ghi chú
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
              {transactionType === LOSS ? "Tiền chi" : "Tiền thu"}
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-full-name"
              type="number"
              value={transaction.amount}
              onChange={(e) =>
                setTransaction({
                  ...transaction,
                  amount: e.target.value,
                })
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
              Danh mục
            </label>
          </div>
          <div class="md:w-2/3">
            <select
              class="bg-gray-50 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              onChange={(e) =>
                setTransaction({ ...transaction, categoryId: e.target.value })
              }
              value={transaction.categoryId}
            >
              <option value="">Chọn danh mục</option>
              {categories.map((category) => (
                <option value={category.id}>{category.categoryName}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-3 items-center justify-center">
          <button
            class={`justify-center shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${
              transactionType === LOSS ? "bg-[#F07281]" : "bg-[#8AC9FE]"
            }`}
            type="button"
            onClick={handleAddTransaction}
          >
            {transactionId
              ? "Chỉnh sửa"
              : transactionType === LOSS
              ? "Nhập khoản chi"
              : "Nhập khoản thu"}
          </button>

          <button
            className={`shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded bg-red-500 ${
              transactionId ? "" : "hidden"
            }`}
          >
            Xoá
          </button>

          <button
            className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded bg-blue-500"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransactionForm;
