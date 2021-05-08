import styled from 'styled-components'

export const MobileIcon = styled.div`
display: none ;
@media screen and (max-width: 768px){
display: block;
position: absolute;
top:-10px;
right: 0;
transform: translate(-100%,60%);
font-size: 1.8rem;
cursor: pointer;
color: #ffb61e;
}`