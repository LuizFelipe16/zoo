import { Spinner } from "react-bootstrap";
import Sidebar from "./Sidebar";

export default function Loading() {
  return (
    <div id="load">
      <Sidebar page="Loading..." />

      <div className="page-load">
        <Spinner size={200} animation="border" variant="success" />
      </div>
    </div>
  );
}