import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function AboutPage() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container min-h-screen px-6 mx-auto pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-zinc-100">
            About Me
          </h1>
          <p className="text-zinc-400 leading-7 md:text-lg">
            I'm Manvi Sharma — originally from India, now calling Vancouver home for the past four years. Currently pursuing my Master of Business Analytics at UBC Sauder (Class of '26), I bring nearly a decade of experience as a Software Development Engineer in Test at Workday, AWS, IBM, and British Telecom.
          </p>
          <p className="text-zinc-400 leading-7 md:text-lg mt-4">
          After years of building and testing large-scale systems through automation, I became deeply interested in how data, algorithms, and machine learning can drive smarter decisions. That curiosity now fuels my transition into data science and applied ML engineering — where I combine technical depth with analytical thinking to build intelligent, data-driven solutions.
          </p>

          {/* Journey & Background */}
          <Card>
            <div className="p-6 md:p-10 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
                My Journey
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-zinc-200 mb-3">Professional Background</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-zinc-200">Senior Software Development Engineer Test</div>
                        <div className="text-xs text-zinc-500">Workday • Jun 2023 - May 2025</div>
                        <div className="text-xs text-zinc-500">Vancouver, BC • Led automation & data validation</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-zinc-200">QAE II</div>
                        <div className="text-xs text-zinc-500">Amazon Web Services (AWS) • Aug 2022 - Jun 2023</div>
                        <div className="text-xs text-zinc-500">Vancouver, BC • Built automated validation workflows</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-zinc-200">QE Analyst</div>
                        <div className="text-xs text-zinc-500">TD • Jan 2022 - Jul 2022</div>
                        <div className="text-xs text-zinc-500">London, Ontario • Quality Engineering</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-zinc-200">Test Professional</div>
                        <div className="text-xs text-zinc-500">BT (British Telecom) • May 2019 - Dec 2021</div>
                        <div className="text-xs text-zinc-500">Bengaluru, India • Test automation & RPA</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-zinc-200">Senior Technical Services Specialist</div>
                        <div className="text-xs text-zinc-500">IBM • Dec 2018 - May 2019</div>
                        <div className="text-xs text-zinc-500">Technical services & automation</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-zinc-200">Test Engineer</div>
                        <div className="text-xs text-zinc-500">Infosys Limited • Feb 2018 - Nov 2018</div>
                        <div className="text-xs text-zinc-500">Bangalore • Test automation</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-zinc-200">Project Engineer</div>
                        <div className="text-xs text-zinc-500">Wipro • Sep 2015 - Feb 2018</div>
                        <div className="text-xs text-zinc-500">Bengaluru, India • Project engineering & testing</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-zinc-200 mb-3">Personal Interests & Hobbies</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">📸</div>
                      <div className="text-xs text-zinc-400">Photography</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">🧘</div>
                      <div className="text-xs text-zinc-400">Yoga & Fitness</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">🎨</div>
                      <div className="text-xs text-zinc-400">Painting</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">🥋</div>
                      <div className="text-xs text-zinc-400">Karate</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">🏔️</div>
                      <div className="text-xs text-zinc-400">Hiking</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">🎾</div>
                      <div className="text-xs text-zinc-400">Racquet Sports</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">✈️</div>
                      <div className="text-xs text-zinc-400">Traveling</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">📚</div>
                      <div className="text-xs text-zinc-400">Reading</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">🍳</div>
                      <div className="text-xs text-zinc-400">Cooking</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                      <div className="text-2xl mb-1">🧘‍♀️</div>
                      <div className="text-xs text-zinc-400">Meditation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Skills Visualization */}
          <Card>
            <div className="p-6 md:p-10 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
                Core Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-zinc-200">Data Science & AI</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>Python (pandas, scikit-learn, PyTorch)</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>Machine Learning & NLP</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>Statistical Analysis & A/B Testing</span>
                        <span>88%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-zinc-200">Development & Tools</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>JavaScript, Java, SQL</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>AWS & Cloud Technologies</span>
                        <span>82%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '82%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>Tableau & Data Visualization</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Stats */}
          <Card>
            <div className="p-6 md:p-10 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
                Project Portfolio
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">4</div>
                  <div className="text-sm text-zinc-400">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">3</div>
                  <div className="text-sm text-zinc-400">AI/ML Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">2</div>
                  <div className="text-sm text-zinc-400">Web Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">1</div>
                  <div className="text-sm text-zinc-400">Analytics Tool</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Technology Stack */}
          <Card>
            <div className="p-6 md:p-10 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Python", category: "Data Science", color: "bg-blue-500" },
                  { name: "JavaScript", category: "Web Dev", color: "bg-yellow-500" },
                  { name: "Java", category: "Backend", color: "bg-green-500" },
                  { name: "SQL", category: "Database", color: "bg-red-500" },
                  { name: "AWS", category: "Cloud", color: "bg-purple-500" },
                  { name: "Tableau", category: "Analytics", color: "bg-pink-500" },
                  { name: "R", category: "Statistics", color: "bg-orange-500" },
                  { name: "Matlab", category: "Analysis", color: "bg-cyan-500" },
                  { name: "Streamlit", category: "AI Apps", color: "bg-indigo-500" },
                ].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-zinc-800/50">
                    <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                    <div>
                      <div className="text-sm font-medium text-zinc-200">{tech.name}</div>
                      <div className="text-xs text-zinc-500">{tech.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card>
            <div className="p-6 md:p-10 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">Education</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-400"></div>
                  <div>
                    <div className="text-zinc-100 font-medium">UBC Sauder School of Business</div>
                    <div className="text-zinc-400 text-sm">Master's degree • Aug 2025 – Aug 2026</div>
                    <div className="text-zinc-500 text-sm">Focus: Business Analytics, Machine Learning, Optimization</div>
                    <div className="text-zinc-500 text-sm">Awarded Canada Top Talent Scholarship</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-400"></div>
                  <div>
                    <div className="text-zinc-100 font-medium">Annamalai University</div>
                    <div className="text-zinc-400 text-sm">Post Graduate Diploma, Computer Applications • 2018 – 2019</div>
                    <div className="text-zinc-500 text-sm">Grade: First with Distinction</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-400"></div>
                  <div>
                    <div className="text-zinc-100 font-medium">Punjab Technical University</div>
                    <div className="text-zinc-400 text-sm">Bachelor's degree, Computer Software Engineering • 2011 – 2015</div>
                    <div className="text-zinc-500 text-sm">Grade: First Division with Distinction</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card>
            <div className="p-6 md:p-10 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">Certifications</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-400">
                <li>• NLP, Data Science for Business – DataCamp</li>
                <li>• Intermediate & Introduction to Python – DataCamp</li>
                <li>• Intro to GenAI, LLM, Responsible AI – Google Cloud</li>
                <li>• AI for Everyone – Andrew Ng</li>
              </ul>
            </div>
          </Card>

              {/* Interests & Goals */}
              <Card>
                <div className="p-6 md:p-10 space-y-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
                    Current Focus & Interests
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-zinc-200 mb-3">Current Focus</h3>
                      <ul className="space-y-2 text-zinc-400">
                        <li>• MBAN program completion</li>
                        <li>• Business analytics mastery</li>
                        <li>• Data-driven decision making</li>
                        <li>• Transitioning from QA to Data Science</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-200 mb-3">Career Goals</h3>
                      <ul className="space-y-2 text-zinc-400">
                        <li>• Data Science & Analytics roles</li>
                        <li>• Strategic business insights</li>
                        <li>• Combining tech + business acumen</li>
                        <li>• Leading data-driven initiatives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Fun Facts */}
              <Card>
                <div className="p-6 md:p-10 space-y-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
                    Fun Facts About Me
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">📸</div>
                        <div>
                          <div className="text-sm font-medium text-zinc-200">Creative Entrepreneur</div>
                          <div className="text-xs text-zinc-500"> Built my Vancouver based Photography brand. Completed 70+ photo projects, including Vancouver Fashion Week.</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">☕</div>
                        <div>
                          <div className="text-sm font-medium text-zinc-200">Home Barista</div>
                          <div className="text-xs text-zinc-500">Can't start the day without a perfect cup of coffee</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">🥋</div>
                        <div>
                          <div className="text-sm font-medium text-zinc-200">Martial Artist</div>
                          <div className="text-xs text-zinc-500">9+ months into karate training  — still kicking (literally and figuratively)!</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">🎯</div>
                        <div>
                          <div className="text-sm font-medium text-zinc-200">Lifelong Learner</div>
                          <div className="text-xs text-zinc-500">Always learning & evolving — building on ten years in tech to explore analytics and machine learning.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
        </div>
      </div>
    </div>
  );
}


