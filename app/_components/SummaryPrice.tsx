type SummaryPriceProps = {
  discount: number;
  regularPrice: number;
  numNights: number;
  totalPrice: number;
  hasBreakfast: boolean;
};

function SummaryPrice({
  discount,
  regularPrice,
  numNights,
  totalPrice,
  hasBreakfast,
}: SummaryPriceProps) {
  return (
    <div className="relative flex h-[80px] items-center justify-between bg-accent-500 px-4 text-primary-800">
      <div className="flex w-full items-baseline justify-between gap-4">
        <p className="flex items-baseline gap-2">
          {discount > 0 ? (
            <>
              <span>{regularPrice - discount}руб.</span>
              <span className="font-semibold text-primary-700 line-through">
                {regularPrice}руб.
              </span>
            </>
          ) : (
            <span>{regularPrice}руб.</span>
          )}
          <span>/ночь</span>
          {numNights > 0 && (
            <span className="bg-accent-600 px-3 py-2">&times; {numNights}</span>
          )}
        </p>

        {numNights > 0 && (
          <div className="flex flex-col items-end">
            <p>
              <span className="text-lg font-bold uppercase">Итого:</span>{" "}
              <span className="font-semibold">{totalPrice}руб.</span>
            </p>
            {hasBreakfast && (
              <span className="absolute bottom-2 right-4 text-sm">
                (включая завтраки)
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default SummaryPrice;
