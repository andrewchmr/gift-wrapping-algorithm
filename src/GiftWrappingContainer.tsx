import React, {useEffect, useRef, useState} from 'react';
import {clearInterval, setInterval} from "timers";
import GiftWrappingView from "./GiftWrappingView";
import {Point} from "./types";

const GiftWrappingContainer: React.FC = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const padding = 50;
    const delay = 100;
    const numberOfPoints = 50;

    const [points, setPoints] = useState<Point[]>(getRandomPos());
    const [leftMost, setLeftMost] = useState<Point>(findLeftMost());
    const [currentVertex, setCurrentVertex] = useState<Point>(leftMost);
    const [hull, setHull] = useState<Point[]>([currentVertex]);
    const [nextVertex, setNextVertex] = useState<Point>(points[1]);
    const [index, setIndex] = useState<number>(2);
    const [isRunning, setIsRunning] = useState(true);
    const [checking, setChecking] = useState(points[index]);

    useInterval(() => update(), isRunning ? delay : null);

    function useInterval(callback: any, delay: any) {
        const savedCallback = useRef();
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            function tick() {
                (savedCallback as any).current();
            }

            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    function findLeftMost(): Point {
        const sortedPoints = points.sort((a, b) => a.x - b.x);
        return sortedPoints[0];
    }

    function getRandomPos(): Point[] {
        return Array(numberOfPoints).fill(0).map(() => {
            return {
                x: getRandomNumber(padding, width - padding),
                y: getRandomNumber(padding, height - padding)
            }
        });
    }

    function getRandomNumber(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    function getCrossProduct(v1: Point, v2: Point): number {
        return v1.x * v2.y - v1.y * v2.x;
    }

    function getLinePath(p: Point[]): string {
        const firstPoint = `M${p[0].x},${p[0].y}`;
        let buffer = ``;
        for (let i = 1; i < p.length; i++) {
            buffer += `L${p[i].x},${p[i].y}`;
        }
        return `${firstPoint}${buffer}`;
    }

    function checkPoint() {
        if (points[index]) {
            setChecking(points[index]);
            const a = {x: nextVertex.x - currentVertex.x, y: nextVertex.y - currentVertex.y};
            const b = {x: checking.x - currentVertex.x, y: checking.y - currentVertex.y};
            const cross = getCrossProduct(a, b);
            cross < 0 && setNextVertex(checking);
        }
    }

    function update() {
        checkPoint();
        setIndex(index + 1);
        if (index === points.length) {
            if (nextVertex === leftMost) {
                setIsRunning(false);
                addVertexToHull();
            } else {
                addVertexToHull();
            }
        }
    }

    function addVertexToHull() {
        setHull([...hull, nextVertex]);
        setCurrentVertex(nextVertex);
        setIndex(0);
        setNextVertex(leftMost);
    }

    return <GiftWrappingView points={points} checking={checking} currentVertex={currentVertex} getLinePath={getLinePath}
                             hull={hull} isRunning={isRunning} nextVertex={nextVertex} width={width} height={height}/>
};

export default GiftWrappingContainer;