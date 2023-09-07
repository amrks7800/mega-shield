import { CircularProgress } from "."

type DotsGroupProps = {
  page: number
  percentage: number
  go: (num: number) => void
  setPercentage: React.Dispatch<
    React.SetStateAction<number>
  >
}

const DotsGroup = ({
  page,
  percentage,
  go,
  setPercentage,
}: DotsGroupProps) => {
  const nums = [1, 2, 3, 4, 5]
  return (
    <div className="flex items-center justify-center gap-4 w-fit">
      {nums.map(num => {
        return page === num ? (
          <CircularProgress
            aspectWidth="30px"
            percentage={percentage}
            key={num}
          />
        ) : (
          <div
            className="w-2 h-2 bg-white rounded-full aspect-square cursor-pointer"
            onClick={() => {
              setPercentage(0)
              go(num)
            }}
            key={num}
          ></div>
        )
      })}
    </div>
  )
}
export default DotsGroup
