import React from 'react'
import "./categories.scss"
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <div className="categories">
    <div className="col">
      <div className="row">
        <img
          src="/img/1.jpeg"
          alt=""
        />
        <button>
          <Link className="link" to="/products/1">
            Food help
          </Link>
        </button>
      </div>
      <div className="row">
        <img
          src="/img/2.jpeg"
          alt=""
        />
        <button>
          <Link to="/products/1" className="link">
            Core members
          </Link>
        </button>
      </div>
    </div>
    <div className="col">
      <div className="row">
        {" "}
        <img
          src="/img/3.jpeg"
          alt=""
        />
        <button>
          <Link to="/products/1" className="link">
            Homeless People
          </Link>
        </button>
      </div>
    </div>
    <div className="col col-l">
      <div className="row">
        <div className="col">
          <div className="row">
            <img
              src="/img/4.jpeg"
              alt=""
            />
            <button>
              <Link to="/products/1" className="link">
                Food help
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            {" "}
            <img
              src="/img/5.jpeg"
              alt=""
            />
            <button>
              <Link to="/products/1" className="link">
                Rations
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <img
          src="/img/6.jpeg"
          alt=""
        />
        <button>
          <Link to="/products/1" className="link">
            Healthcare
          </Link>
        </button>
      </div>
    </div>
  </div>
  )
}
