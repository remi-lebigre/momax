import { FC, ReactElement } from "react";
import { MilestoneProps } from "./Milestone";

export interface TimelineProps {
    children: ReactElement<MilestoneProps>[]
}
const Timeline: FC<TimelineProps> = ({ children }) => <ul className="max-w-[900px]">{children}</ul>

export default Timeline