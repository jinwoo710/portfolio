export interface CareerItemProps {
  company: string;
  startDate: string;
  endDate: string;
  position: string;
  isLeft?: boolean;
}

export default function CareerItem({
  company,
  startDate,
  endDate,
  position,
  isLeft = false,
}: CareerItemProps) {
  return (
    <div className={`${isLeft ? "ml-10" : "mr-10"} flex flex-col`}>
      <div className="space-x-4">
        <span className="font-bold text-xl md:text-2xl whitespace-nowrap">
          {company}
        </span>
        <span className="whitespace-nowrap">
          {startDate}~{endDate}
        </span>
      </div>
      <span className={`${isLeft ? "mr-auto" : "ml-auto"}`}>{position}</span>
    </div>
  );
}
