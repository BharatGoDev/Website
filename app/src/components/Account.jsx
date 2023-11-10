import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import Auth from './Auth'
import PropTypes from 'prop-types';
import Avatar  from './Avatar';

function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      const { user } = session

      const { data, error } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error) {
        console.warn(error)
      } else if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }

      setLoading(false)
    }

    getProfile()
  }, [session])

  async function updateProfile(event, avatarUrl) {
    event.preventDefault()

    setLoading(true)
    const { user } = session

    const updates = {
      id: user.id,
      username,
      website,
      avatarUrl,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    } else {
      setAvatarUrl(avatarUrl)
    }
    setLoading(false)
  }

  return (
    <div className="account-container">
      <Auth />
      <form onSubmit={updateProfile} className="form-widget">
        <div className="profile-section">
          <Avatar
            url={avatar_url}
            size={150}
            onUpload={(event, url) => {
              updateProfile(event, url);
            }}
          />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div className="profile-section">
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            placeholder="Your Name"
            required
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="profile-section">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="url"
            placeholder="Your Website"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="button-section">
          <button className="button primary" type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </div>
        <div className="button-section">
          <button className="button" type="button" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        </div>
      </form>
    </div>
  );
}

Account.propTypes = {
  session: PropTypes.object.isRequired, // Assuming session is an object, adjust if needed
};

export default Account;