import { LoaderPinwheelIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Loading() {
  return (
    <div className={styles.container}>
      <div className={`${styles.loader} animate-pulse`}>
        <LoaderPinwheelIcon className="animate-spin h-14 w-14" />
        <span>Carregando...</span>
      </div>
    </div>
  );
}
