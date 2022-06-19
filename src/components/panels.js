import { ArrowDownIcon } from "@heroicons/react/outline";

function Panel(props) {
  return <div className="on-background">{props.children}</div>;
}
Panel.Heading = (props) => (
  <h5 className="pb-0.5 mb-4 uppercase text-xs font-semibold border-b border-dark">
    {props.children}
  </h5>
);
Panel.Body = (props) => props.children;

export default function Panels() {
  return (
    <section>
      <h2>Panels</h2>
      <div className="p-2 border  ">
        <div className="w-full ">
          <div className="max-w-lg space-y-8">
            <Panel>
              <Panel.Heading>Rate</Panel.Heading>
              <Panel.Body>
                <div className="inline-flex">
                  <ArrowDownIcon className="on-background-error w-3 mr-1" />
                  <span className="text-xs">12%</span>
                </div>
                <div className="text-4xl">12.34%</div>
              </Panel.Body>
            </Panel>
            <Panel>
              <Panel.Heading>Rate</Panel.Heading>
              <Panel.Body>
                <div className="inline-flex">
                  <ArrowDownIcon className="on-background-error w-3 mr-1" />
                  <span className="text-xs">12%</span>
                </div>
                <div className="text-4xl">12.34%</div>
              </Panel.Body>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}
