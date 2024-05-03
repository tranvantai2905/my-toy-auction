/* eslint-disable jsx-a11y/anchor-is-valid */
const Tabs = ["Xe đang đấu giá", "Xe đã trúng đấu giá"];
const CartTab = ({ state, handleChangeTab }) => {
  return (
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex gap-6" aria-label="Tabs">
          {Tabs.map((val, idx) => {
            if (idx === state) {
              return (
                <a
                  href="#"
                  class="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
                  aria-current="page"
                  onClick={() => handleChangeTab(idx)}
                >
                  {val}
                </a>
              );
            } else {
              return (
                <a
                  href="#"
                  class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  onClick={() => handleChangeTab(idx)}
                >
                  {val}
                </a>
              );
            }
          })}
        </nav>
      </div>
    </div>
  );
};

export default CartTab;
