import{s as o}from"./index.b078bf5f.js";const r=o.div`
  display: flex;
  justify-content: space-evenly;
  gap: 12px;
  margin-top: 24px;
`,t=o.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`,e=o(t)`
  background-color: var(--color-background-disabled);
  color: var(--color-text-dark, #606060);
  padding-left: 29px;
  padding-right: 29px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 6px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  font-family: 'Source Han Sans SC';
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background-color: var(--color-background-not-selected);
  }
`,a=o(t)`
  background-color: var(--color-highlight-2);
  color: var(--color-text-dark, #606060);
  padding-left: 29px;
  padding-right: 29px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 6px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  font-family: 'Source Han Sans SC';
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background-color: var(--color-highlight-2-hover);
  }
`,i=o.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-default);
  font-size: 18px;
  padding: 0;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:focus {
    outline: none;
  }
`;export{r as B,i as C,e as a,a as b};
