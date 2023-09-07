import { CircularProgress } from "."

type DotsGroupProps = {
  page: number
  percentage: number
  go: (num: number) => void
}

const DotsGroup = ({
  page,
  percentage,
  go,
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
            onClick={() => go(num)}
            key={num}
          ></div>
        )
      })}
    </div>
  )
}
export default DotsGroup
