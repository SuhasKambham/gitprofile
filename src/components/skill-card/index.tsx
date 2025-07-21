import { skeleton } from '../../utils';

interface SkillsObject {
  technical: string[];
  frameworksAndLibraries: string[];
  tools: string[];
}

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: SkillsObject;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }
    return array;
  };

  const renderSection = (title: string, items: string[]) => (
    <div className="mb-4">
      <h6 className="font-semibold text-base-content opacity-70 mb-2">
        {title}
      </h6>
      <div className="-m-1 flex flex-wrap justify-center gap-2">
        {items.map((skill, index) => (
          <div key={index} className="badge badge-primary badge-sm">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tech Stack</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          {loading ? (
            <div className="-m-1 flex flex-wrap justify-center gap-2">
              {renderSkeleton()}
            </div>
          ) : (
            <>
              {renderSection('Technical', skills.technical)}
              {renderSection(
                'Frameworks & Libraries',
                skills.frameworksAndLibraries,
              )}
              {renderSection('Tools', skills.tools)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
