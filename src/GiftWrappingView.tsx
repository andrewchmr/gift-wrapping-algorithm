import React from 'react';
import {Point} from "./types";

interface GiftWrappingViewProps {
    points: Point[],
    isRunning: boolean,
    currentVertex: Point,
    nextVertex: Point,
    checking: Point,
    hull: Point[],
    getLinePath: any,
    width: number,
    height: number
}

const GiftWrappingView = ({points, isRunning, currentVertex, nextVertex, checking, hull, getLinePath, width, height}: GiftWrappingViewProps) => {

    const Point = ({point}: { point: Point }) =>
        <circle cx={point.x}
                fill={'white'} cy={point.y}
                r={5}/>;

    const Points = () => <g>{points.map((point, index) => <Point point={point} key={index}/>)}</g>;

    const Lines = () => {
        if (isRunning) {
            return <g>
                <line strokeWidth={2} stroke={'green'} x1={currentVertex.x} y1={currentVertex.y} x2={nextVertex.x}
                      y2={nextVertex.y}/>
                <line strokeWidth={2} stroke={'white'} x1={currentVertex.x} y1={currentVertex.y} x2={checking.x}
                      y2={checking.y}/>
            </g>
        } else {
            return null;
        }
    };

    const HullPath = () => <path opacity={0.2} fill={'lavender'} d={getLinePath(hull)} strokeWidth={10}
                                 stroke={'blue'}/>;

    const Wrapper = (props: any) => <svg viewBox={`0 0 ${width} ${height}`}>{props.children}</svg>;

    return (
        <Wrapper>
            <Points/>
            <Lines/>
            <HullPath/>
        </Wrapper>
    );
};

export default GiftWrappingView;
