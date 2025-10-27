import { useState } from "react";

export default function XCalcPad() {
  const [expr, setExpr] = useState("");

  const press = (v) => setExpr(expr + v);
  const clear = () => setExpr("");
  const calc = () => {
    try {
      // eslint-disable-next-line no-eval
      setExpr(eval(expr).toString());
    } catch {
      setExpr("Error");
    }
  };

  const btn = (v) => (
    <button style={styles.btn} onClick={() => press(v)}>{v}</button>
  );

  return (
    <div style={styles.wrap}>
      <h2>React Calculator</h2>
      <input
        value={expr}
        readOnly
        style={styles.display}
        placeholder="0"
      />

      <div style={styles.grid}>
        {btn("7")} {btn("8")} {btn("9")} {btn("/")}
        {btn("4")} {btn("5")} {btn("6")} {btn("*")}
        {btn("1")} {btn("2")} {btn("3")} {btn("-")}
        {btn("0")} {btn(".")} <button style={styles.btn} onClick={calc}>=</button> {btn("+")}
        <button style={styles.clear} onClick={clear}>C</button>
      </div>
    </div>
  );
}

const styles = {
  wrap: { width: 500, margin: "50px auto", textAlign: "center", fontFamily: "sans-serif" },
  display: { width: "100%", fontSize: 30, padding: 10, marginBottom: 10, textAlign: "right" },
  grid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 },
  btn: { padding: "20px 0", fontSize: 30, cursor: "pointer" },
  clear: { gridColumn: "span 4", padding: "12px 0", fontSize: 18, background: "#f55", cursor: "pointer" }
};
