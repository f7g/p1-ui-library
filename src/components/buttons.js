import { ArrowsExpandIcon } from "@heroicons/react/outline";

export default function Buttons() {
  return (
    <section>
      <h2>Buttons</h2>
      <div className="border">
        <div className="p-2 text-sm">
          {[
            "btn-default",
            "btn-primary",
            "btn-secondary",
            "btn-borderless",
          ].map((className, i) => (
            <button key={i} className={"mr-2 " + className}>
              .{className}
            </button>
          ))}
        </div>
        <div className="p-2 text-sm">
          {[
            "btn-default",
            "btn-primary",
            "btn-secondary",
            "btn-borderless",
          ].map((className, i) => (
            <button key={i} className={"mr-2 " + className}>
              <ArrowsExpandIcon className="icon-xs mr-2" />
              <span>.{className}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
