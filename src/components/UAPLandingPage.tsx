import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award, BookOpen, Shield, Target, TrendingUp, Clock } from 'lucide-react';

const UAPLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <Badge className="bg-primary/20 text-primary border-primary/30">
            🎉 Welcome to Your Personalized Security Training
          </Badge>
          <h1 className="text-5xl font-bold spooky-text">
            User Awareness Program 2024
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Congratulations on completing the security assessment! You've unlocked your personalized 
            cybersecurity training program designed specifically for your role and security level.
          </p>
        </div>

        {/* User Stats */}
        <Card className="p-6 cyber-glow bg-card/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Assessment Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4/4</div>
              <div className="text-sm text-muted-foreground">Challenges Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Advanced</div>
              <div className="text-sm text-muted-foreground">Security Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">12</div>
              <div className="text-sm text-muted-foreground">Training Modules</div>
            </div>
          </div>
        </Card>

        {/* Training Modules */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-foreground">Your Personalized Training Path</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Module 1 */}
            <Card className="p-6 hover:cyber-glow transition-all bg-card/30 border-border/50">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Shield className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">Week 1</Badge>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email Security Mastery</h3>
                  <p className="text-sm text-muted-foreground">Advanced phishing detection and email security protocols</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>45 minutes</span>
                  <Users className="w-3 h-3 ml-2" />
                  <span>Interactive</span>
                </div>
              </div>
            </Card>

            {/* Module 2 */}
            <Card className="p-6 hover:cyber-glow transition-all bg-card/30 border-border/50">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Target className="w-8 h-8 text-accent" />
                  <Badge variant="outline" className="text-xs">Week 2</Badge>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Social Engineering Defense</h3>
                  <p className="text-sm text-muted-foreground">Recognize and counter social engineering attacks</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>60 minutes</span>
                  <Users className="w-3 h-3 ml-2" />
                  <span>Group Exercise</span>
                </div>
              </div>
            </Card>

            {/* Module 3 */}
            <Card className="p-6 hover:cyber-glow transition-all bg-card/30 border-border/50">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">Week 3</Badge>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Data Protection Laws</h3>
                  <p className="text-sm text-muted-foreground">GDPR, CCPA, and industry-specific compliance</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>30 minutes</span>
                  <Users className="w-3 h-3 ml-2" />
                  <span>Self-paced</span>
                </div>
              </div>
            </Card>

            {/* Module 4 */}
            <Card className="p-6 hover:cyber-glow transition-all bg-card/30 border-border/50">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <TrendingUp className="w-8 h-8 text-accent" />
                  <Badge variant="outline" className="text-xs">Week 4</Badge>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Incident Response</h3>
                  <p className="text-sm text-muted-foreground">How to report and respond to security incidents</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>40 minutes</span>
                  <Users className="w-3 h-3 ml-2" />
                  <span>Simulation</span>
                </div>
              </div>
            </Card>

            {/* Module 5 */}
            <Card className="p-6 hover:cyber-glow transition-all bg-card/30 border-border/50">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">Final</Badge>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Security Certification</h3>
                  <p className="text-sm text-muted-foreground">Final assessment and security certification</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>90 minutes</span>
                  <Users className="w-3 h-3 ml-2" />
                  <span>Proctored</span>
                </div>
              </div>
            </Card>

            {/* More modules placeholder */}
            <Card className="p-6 border-dashed border-2 border-border/50 bg-muted/20">
              <div className="text-center space-y-2">
                <div className="text-muted-foreground">+ 7 More Modules</div>
                <div className="text-xs text-muted-foreground">Unlocked based on your progress</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center cyber-glow bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Ready to Begin Your Journey?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your personalized training starts now. Complete all modules to earn your 
              Security Awareness Certification and become a cybersecurity champion.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Training
              </Button>
              <Button variant="outline" className="border-border hover:bg-secondary">
                <BookOpen className="w-4 h-4 mr-2" />
                View Curriculum
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>This training program is mandatory and must be completed within 30 days.</p>
          <p className="mt-2">For questions, contact: <span className="text-primary">security-training@yourcompany.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default UAPLandingPage;