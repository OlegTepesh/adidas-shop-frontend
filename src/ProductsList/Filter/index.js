import React from 'react';
import './styles.css';

export default () => {
  return (
    <section className="filters">
      <div className="filters-icon">
        <div className="funnel" />
      </div>
      <div className="filters-gender">
        <button className="filter-button active">Man</button>
        <button className="filter-button">Woman</button>
      </div>
      <div className="filters-size">
        <div className="filter-name">Size</div>
        <button className="filter-button">36</button>
        <button className="filter-button">37</button>
        <button className="filter-button">38</button>
        <button className="filter-button">39</button>
        <button className="filter-button">40</button>
        <button className="filter-button active">41</button>
        <button className="filter-button">42</button>
      </div>
    </section>
  );
};
