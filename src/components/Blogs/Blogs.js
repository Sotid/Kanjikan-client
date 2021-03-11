import React from "react";
function Blogs(props) {
  return (
    <div>
      <div className="videos">
        <h3>
          Need to refresh your skills? <br />
          Check out these amazing blogs:
        </h3>
        <ul>
          <li>
            <a target="_blank" href="https://www.tofugu.com/japanese-grammar/">
              Tofugu
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://www.alljapaneseallthetime.com/blog/"
            >
              All Japanese All the Time
            </a>
          </li>
          <li>
            <a target="_blank" href="https://japaneselevelup.com/">
              Japanese LevelUp
            </a>
          </li>
          <li>
            <a target="_blank" href="https://maggiesensei.com/">
              Maggie Sensei
            </a>
          </li>
          <li>
            <a target="_blank" href="http://nihonshock.com/category/language/">
              Nihon Shock
            </a>
          </li>
          <li>
            <a target="_blank" href="http://howtojaponese.com/">
              How to Japanese
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Blogs;
