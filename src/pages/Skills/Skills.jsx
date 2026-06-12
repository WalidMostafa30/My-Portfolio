import { skillsCategories } from "@/assets/data";
import PageTitle from "@/components/common/PageTitle";

const Skills = () => {
  return (
    <div className="pageContainer">
      {/* عنوان الصفحة الرئيسي */}
      <PageTitle
        title="Skills"
        subtitle="My technical abilities and expertise"
      />

      {/* حاوي الصفوف الرئيسي */}
      <div className="space-y-12">
        {skillsCategories.map((category) => (
          <div
            key={category.id}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start pb-8 border-b border-gray-100 dark:border-neutral-800 last:border-0"
          >
            {/* جهة اليسار: عنوان التصنيف مع مؤشر ملون */}
            <div className="md:col-span-1 flex items-center gap-3 pt-1">
              <span className={`w-2 h-2 rounded-full bg-primary`} />
              <h3 className="flex-1 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                {category.title}
              </h3>
            </div>

            {/* جهة اليمين: المهارات مرصوصة بشكل Badges مرنة */}
            <div className="md:col-span-3 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-full shadow-2xs hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 group cursor-default"
                >
                  {/* أيقونة المهارة */}
                  <img
                    src={skill.image}
                    alt={`${skill.name} icon`}
                    className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-150"
                    loading="lazy"
                  />
                  {/* اسم المهارة */}
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
