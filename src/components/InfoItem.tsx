import React from "react";
import { Items } from "./Info";
import styled from "styled-components";

type Props = {
  item: Items;
};

const InfoItem: React.FC<Props> = (props: Props) => {
  const { color, value, icon, label } = props.item;
  return (
    <Wrapper>
      <article className='item'>
        <span className={color}>{icon}</span>
        <div>
          <h3>{value}</h3>
          <p>{label}</p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default InfoItem;
