import styled from 'styled-components';

export interface DriverLineProps {
  /**
   * Divider 길이
   */
  width: string;
  /**
   * Divider 색상
   */
  color: string;
  /**
   * margin-bottom
   */
  mb?: number;
  /**
   * margin-top
   */
  mt?: number;
}

function DividerLine({ color, width, mb, mt, ...rest }: DriverLineProps) {
  return (
    <StyledDividerLine color={color} width={width} mb={mb} mt={mt} {...rest} />
  );
}

const StyledDividerLine = styled.div<DriverLineProps>`
  width: ${({ width }) => width};
  height: 1px;
  background-color: ${({ color }) => color};
  ${({ mb }) => mb && `margin-bottom: ${mb}px`};
  ${({ mt }) => mt && `margin-top: ${mt}px`};
`;

export default DividerLine;
