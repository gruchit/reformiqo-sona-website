import "./NewBrocher.css";
import HTMLFlipBook from "./turn.js";
import { useRef, useState } from "react";
// import { PageFlip } from "../pagefilp";
import HTMLFlipBook1 from "./turn.min.js";

export default function App() {
  const bookRef = useRef();
  const [curPage, setCurPage] = useState();
  const [orientation, setOrientation] = useState();

  const getPageStatus = () => {
    const pageMap = {
      portrait: "竖向(单页)",
      landscape: "横向(双页)"
    };
    const status = bookRef.current.pageFlip().getOrientation();
    setOrientation(status);
    console.log("status", status, pageMap[status]);
  };

  const onPrev = (hasFlip = "N") => {
    const pageIndex = bookRef.current.pageFlip().getCurrentPageIndex();
    console.log("pageIndex", pageIndex);
    if (hasFlip === "Y") {
      bookRef.current.pageFlip().flipPrev("bottom");
    } else {
      bookRef.current.pageFlip().turnToPrevPage();
    }
  };

  const onNext = (hasFlip = "N") => {
    const pageIndex = bookRef.current.pageFlip().getCurrentPageIndex();
    console.log("pageIndex", pageIndex);
    // 到底了
    if (pageIndex === 7) return;
    if (hasFlip === "Y") {
      bookRef.current.pageFlip().flipNext();
    } else {
      bookRef.current.pageFlip().turnToNextPage();
    }
  };

  // 翻转结束后
  const onFlip = (e) => {
    const curPage = e.data;
    setCurPage(curPage);
    console.log("flip", e);
  };

  const onChangeState = (instance) => {
    // console.log("instance", instance);
  };
  return (
    <div className="App">
      <div className="container">
        <HTMLFlipBook1
          ref={bookRef}
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          // maxWidth={1000}
          // minHeight={400}
          // maxHeight={1533}
          autoSize={true}
          showCover={false}
          usePortrait={true}
          mobileScrollSupport={true}
          flippingTime={1000}
          clickEventForward={false}
          onFlip={onFlip}
          useMouseEvents={true}
          onChangeState={onChangeState}
          onUpdate={(e) => {
            console.log(e);
          }}
          swipeDistance={30}
          drawShadow={true}
          maxShadowOpacity={0.5}
          isClickFlip={false}
        >
          <div id="11" className="demoPage1" data-satus="origin">
            <div>
              Page 1
              <img
                alt="图像"
                style={{ width: 100, height: 100 }}
                src="https://img.qlchat.com/qlLive/activity/image/EALM7STZ-QG62-PEP7-1693816827253-2J2HV6IUKF1Y.png"
              />
            </div>
          </div>
          <div className="demoPage2" data-density="sort">
            <span>Page 2</span>
          </div>
          <div className="demoPage3" data-density="sort">
            <span>Page 3</span>
          </div>
          <div className="demoPage4" data-density="sort">
            <span>Page 4</span>
          </div>
          <div className="demoPage1" data-density="sort">
            <span>Page 5</span>
          </div>
          <div className="demoPage2" data-density="sort">
            <span>Page 6</span>
          </div>
          <div className="demoPage3" data-density="sort">
            Page 7
          </div>
          <div className="demoPage4">Page 8</div>
        </HTMLFlipBook1>

        <div style={{ display: "flex", marginTop: "20px" }}>
          <button onClick={onPrev}>上一页</button>
          <button onClick={onNext}>下一页</button>
          <button onClick={() => onPrev("Y")}>上一页(有动画)</button>
          <button onClick={() => onNext("Y")}>下一页(有动画)</button>
          <button onClick={() => getPageStatus()}>获取状态</button>
        </div>
        <div>
          {curPage === 7 && "我已经到最后一页了，别往后翻啦"}
          {curPage === 0 && "我已经到第一页了，别往前翻啦"}
        </div>
      </div>
    </div>
  );
}
