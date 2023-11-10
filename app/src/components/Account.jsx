import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function AccountPage() {
  const [loading, setLoading] = useState(false);
  const [session] = useState(() => supabase.auth.session());
  const [profile, setProfile] = useState({
    username: "",
    website: "",
  });

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    setLoading(true);

    try {
      const user = supabase.auth.user();
      if (user) {
        const { data, error, status } = await supabase
          .from("profiles")
          .select(`username, website`)
          .eq("id", user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setProfile({
            username: data.username,
            website: data.website,
          });
        }
      }
    } catch (error) {
      console.error("Error fetching profile:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    // Redirect or navigate to the login page after signing out
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = supabase.auth.user();

      const updates = {
        id: user && user.id,
        ...profile,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal",
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-4xl font-bold tracking-tight mb-8">
        <span style={{ color: "#2196F3" }}>Greetings from </span>
        <br />
        <span style={{ color: "#FF9933" }}>BharatGoDev</span>
      </h1>

      <form onSubmit={updateProfile} className="flex flex-col items-center">
        <label className="text-sm font-medium">
          Email: <br />
          {session?.user?.email}
        </label>

        <div className="mb-4">
          <label className="text-sm font-medium">Name:</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Website:</label>
          <input
            type="url"
            name="website"
            value={profile.website}
            onChange={(e) =>
              setProfile({ ...profile, website: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>

      <div className="mt-8">
        <button
          onClick={signOut}
          className="bg-red-500 text-white rounded-md px-4 py-2"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
