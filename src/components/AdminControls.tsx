import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Link, FileText, Video, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdminControlsProps {
  chapterId?: string;
  lectureId?: string;
  onUpdate?: () => void;
}

export const AdminControls = ({ chapterId, lectureId, onUpdate }: AdminControlsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<'chapter' | 'lecture' | 'problem' | 'link'>('chapter');
  const { toast } = useToast();

  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');
  const [linkType, setLinkType] = useState<'article' | 'video' | 'practice'>('article');
  const [linkUrl, setLinkUrl] = useState('');

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setContent('');
    setLinkUrl('');
    setDifficulty('Easy');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show success message
    // In a real implementation, you would save to database
    toast({
      title: "Content updated",
      description: `${formType} has been successfully ${formType === 'chapter' ? 'added' : 'updated'}.`,
    });
    
    resetForm();
    setIsOpen(false);
    onUpdate?.();
  };

  const renderForm = () => {
    switch (formType) {
      case 'chapter':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Chapter Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter chapter title"
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter chapter description"
                rows={3}
              />
            </div>
          </div>
        );

      case 'lecture':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Lecture Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter lecture title"
                required
              />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter lecture content"
                rows={5}
              />
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Problem Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter problem title"
                required
              />
            </div>
            <div>
              <Label htmlFor="difficulty">Difficulty</Label>
              <Select value={difficulty} onValueChange={(value: 'Easy' | 'Medium' | 'Hard') => setDifficulty(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description">Problem Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter problem description"
                rows={3}
              />
            </div>
          </div>
        );

      case 'link':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="linkType">Link Type</Label>
              <Select value={linkType} onValueChange={(value: 'article' | 'video' | 'practice') => setLinkType(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="practice">Practice</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="linkUrl">URL</Label>
              <Input
                id="linkUrl"
                type="url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="Enter link URL"
                required
              />
            </div>
            <div>
              <Label htmlFor="title">Link Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter link title"
                required
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getIcon = () => {
    switch (formType) {
      case 'chapter':
        return <FileText className="h-4 w-4" />;
      case 'lecture':
        return <Video className="h-4 w-4" />;
      case 'problem':
        return <Code className="h-4 w-4" />;
      case 'link':
        return <Link className="h-4 w-4" />;
    }
  };

  return (
    <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Edit className="h-5 w-5" />
          Admin Controls
        </CardTitle>
        <CardDescription>
          Add or edit content for this section
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setFormType('chapter')}
                className="justify-start"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Chapter
              </Button>
            </DialogTrigger>
            
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setFormType('lecture')}
                className="justify-start"
                disabled={!chapterId}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Lecture
              </Button>
            </DialogTrigger>
            
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setFormType('problem')}
                className="justify-start"
                disabled={!lectureId}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Problem
              </Button>
            </DialogTrigger>
            
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setFormType('link')}
                className="justify-start"
                disabled={!lectureId}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Link
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {getIcon()}
                  Add {formType.charAt(0).toUpperCase() + formType.slice(1)}
                </DialogTitle>
                <DialogDescription>
                  Fill in the details below to add new {formType}.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {renderForm()}
                
                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="flex-1">
                    Add {formType.charAt(0).toUpperCase() + formType.slice(1)}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};