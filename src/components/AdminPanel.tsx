import { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';

export const AdminPanel = () => {
  const [user, setUser] = useState<any>(null);
  const [games, setGames] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => setUser(user));
    const unsubscribeGames = onSnapshot(collection(db, 'games'), (snapshot) => {
      setGames(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => { unsubscribeAuth(); unsubscribeGames(); };
  }, []);

  const login = () => signInWithPopup(auth, new GoogleAuthProvider());
  const logout = () => signOut(auth);

  const saveGame = async () => {
    if (!user) return;
    if (editingId) {
      await updateDoc(doc(db, 'games', editingId), { title });
      setEditingId(null);
    } else {
      await addDoc(collection(db, 'games'), { title, genre: 'N/A', status: 'N/A', description: 'N/A' });
    }
    setTitle('');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto pt-24 text-[#F2F2F0]">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      {user ? (
        <>
          <button className="bg-[#26262A] text-white px-4 py-2 mb-6" onClick={logout}>Logout</button>
          <div className="flex gap-4 mb-8">
            <input className="bg-[#141416] border border-[#26262A] p-2 flex-grow" value={title} onChange={e => setTitle(e.target.value)} placeholder="Game Title" />
            <button className="bg-[#B8FF32] text-[#080808] px-4 py-2 font-bold" onClick={saveGame}>{editingId ? 'Update' : 'Add'} Game</button>
          </div>
          <div className="space-y-4">
            {games.map(game => (
              <div key={game.id} className="border border-[#26262A] p-4 flex justify-between items-center">
                <span>{game.title}</span>
                <div className="flex gap-2">
                  <button className="text-[#B8FF32]" onClick={() => { setEditingId(game.id); setTitle(game.title); }}>Edit</button>
                  <button className="text-red-500" onClick={() => deleteDoc(doc(db, 'games', game.id))}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <button className="bg-[#B8FF32] text-[#080808] px-4 py-2 font-bold" onClick={login}>Login with Google</button>
      )}
    </div>
  );
};
