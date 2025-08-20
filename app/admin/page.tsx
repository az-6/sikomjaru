"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import type { HeroSection, TeamMember } from "@/lib/supabase";

export default function AdminPanel() {
  const [heroSection, setHeroSection] = useState<HeroSection | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      // Fetch hero section
      const { data: heroData } = await supabase
        .from("hero_section")
        .select("*")
        .eq("is_active", true)
        .single();

      // Fetch team members
      const { data: teamData } = await supabase
        .from("team_members")
        .select("*")
        .order("display_order");

      setHeroSection(heroData);
      setTeamMembers(teamData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function saveHeroSection() {
    if (!heroSection) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from("hero_section")
        .update({
          title: heroSection.title,
          subtitle: heroSection.subtitle,
          description: heroSection.description,
          cta_primary_text: heroSection.cta_primary_text,
          cta_secondary_text: heroSection.cta_secondary_text,
        })
        .eq("id", heroSection.id);

      if (error) throw error;
      alert("Hero section updated successfully!");
    } catch (error) {
      console.error("Error saving hero section:", error);
      alert("Error saving hero section");
    } finally {
      setSaving(false);
    }
  }

  async function saveTeamMember(member: TeamMember) {
    setSaving(true);
    try {
      const { error } = await supabase
        .from("team_members")
        .update({
          name: member.name,
          role: member.role,
          description: member.description,
        })
        .eq("id", member.id);

      if (error) throw error;
      alert("Team member updated successfully!");
    } catch (error) {
      console.error("Error saving team member:", error);
      alert("Error saving team member");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          SIKOMJARU Admin Panel
        </h1>
        <p className="text-gray-600">Manage your website content easily</p>
      </div>

      <div className="space-y-8">
        {/* Hero Section Management */}
        {heroSection && (
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={heroSection.title}
                  onChange={(e) =>
                    setHeroSection({
                      ...heroSection,
                      title: e.target.value,
                    })
                  }
                  placeholder="Enter hero title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subtitle
                </label>
                <Input
                  value={heroSection.subtitle}
                  onChange={(e) =>
                    setHeroSection({
                      ...heroSection,
                      subtitle: e.target.value,
                    })
                  }
                  placeholder="Enter hero subtitle"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <Textarea
                  value={heroSection.description}
                  onChange={(e) =>
                    setHeroSection({
                      ...heroSection,
                      description: e.target.value,
                    })
                  }
                  placeholder="Enter hero description"
                  rows={4}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Primary CTA Text
                  </label>
                  <Input
                    value={heroSection.cta_primary_text}
                    onChange={(e) =>
                      setHeroSection({
                        ...heroSection,
                        cta_primary_text: e.target.value,
                      })
                    }
                    placeholder="Primary button text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Secondary CTA Text
                  </label>
                  <Input
                    value={heroSection.cta_secondary_text}
                    onChange={(e) =>
                      setHeroSection({
                        ...heroSection,
                        cta_secondary_text: e.target.value,
                      })
                    }
                    placeholder="Secondary button text"
                  />
                </div>
              </div>

              <Button
                onClick={saveHeroSection}
                disabled={saving}
                className="bg-teal-600 hover:bg-teal-700"
              >
                {saving ? "Saving..." : "Save Hero Section"}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Team Members Management */}
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">
                      {member.is_supervisor ? "Dosen Pembimbing" : "Mahasiswa"}
                    </h3>
                    <span className="text-sm text-gray-500">
                      Order: {member.display_order}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        value={member.name}
                        onChange={(e) => {
                          const updated = teamMembers.map((m) =>
                            m.id === member.id
                              ? { ...m, name: e.target.value }
                              : m
                          );
                          setTeamMembers(updated);
                        }}
                        placeholder="Enter name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Role
                      </label>
                      <Input
                        value={member.role}
                        onChange={(e) => {
                          const updated = teamMembers.map((m) =>
                            m.id === member.id
                              ? { ...m, role: e.target.value }
                              : m
                          );
                          setTeamMembers(updated);
                        }}
                        placeholder="Enter role"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <Textarea
                      value={member.description || ""}
                      onChange={(e) => {
                        const updated = teamMembers.map((m) =>
                          m.id === member.id
                            ? { ...m, description: e.target.value }
                            : m
                        );
                        setTeamMembers(updated);
                      }}
                      placeholder="Enter description"
                      rows={3}
                    />
                  </div>

                  <Button
                    onClick={() => saveTeamMember(member)}
                    disabled={saving}
                    className="mt-4 bg-blue-600 hover:bg-blue-700"
                    size="sm"
                  >
                    {saving ? "Saving..." : "Save Member"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline">Manage Products</Button>
              <Button variant="outline">Manage Research Items</Button>
              <Button variant="outline">Manage Social Media</Button>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">Database Actions</h4>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={fetchData}>
                  Refresh Data
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-600 hover:bg-red-50"
                >
                  Export Backup
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">
          🎯 Admin Panel Instructions
        </h3>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Edit content directly in the forms above</li>
          <li>• Click "Save" buttons to update the database</li>
          <li>• Changes will appear on the website immediately</li>
          <li>• Use "Refresh Data" to reload from database</li>
        </ul>
      </div>
    </div>
  );
}
