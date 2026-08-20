import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  Ban, 
  CheckCircle2, 
  Clock, 
  Heart, 
  Radar,
  ArrowUpDown
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';

interface MockUserItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  area: string;
  joinedDate: string;
  searchesCount: number;
  demandsCount: number;
  savedItemsCount: number;
  status: 'active' | 'suspended';
}

const INITIAL_USERS: MockUserItem[] = [
  {
    id: 'usr-101',
    name: 'Aakash Kumar',
    phone: '+91 98450 12345',
    email: 'aakash@dhoondo.local',
    area: 'Koramangala 4th Block, Bengaluru',
    joinedDate: '2026-08-01',
    searchesCount: 48,
    demandsCount: 3,
    savedItemsCount: 6,
    status: 'active'
  },
  {
    id: 'usr-102',
    name: 'Priya Nambiar',
    phone: '+91 98800 33441',
    email: 'priya.n@gmail.com',
    area: 'Ejipura / Koramangala, Bengaluru',
    joinedDate: '2026-08-05',
    searchesCount: 32,
    demandsCount: 2,
    savedItemsCount: 4,
    status: 'active'
  },
  {
    id: 'usr-103',
    name: 'Rahul Sundaram',
    phone: '+91 97410 11223',
    email: 'rahul.s@outlook.com',
    area: 'HSR Layout Sector 4, Bengaluru',
    joinedDate: '2026-08-10',
    searchesCount: 21,
    demandsCount: 1,
    savedItemsCount: 2,
    status: 'active'
  },
  {
    id: 'usr-104',
    name: 'Suresh Babu (Electrician)',
    phone: '+91 99001 77665',
    email: 'suresh.electric@yahoo.com',
    area: 'HSR Layout Sector 1, Bengaluru',
    joinedDate: '2026-07-28',
    searchesCount: 89,
    demandsCount: 8,
    savedItemsCount: 15,
    status: 'active'
  },
  {
    id: 'usr-105',
    name: 'Megha Sharma',
    phone: '+91 98455 11990',
    email: 'megha.sharma@gmail.com',
    area: 'Indiranagar 100ft Rd, Bengaluru',
    joinedDate: '2026-08-12',
    searchesCount: 16,
    demandsCount: 0,
    savedItemsCount: 5,
    status: 'active'
  },
  {
    id: 'usr-106',
    name: 'Spam User Demo',
    phone: '+91 99999 00000',
    email: 'test.bot@tempmail.com',
    area: 'BTM Layout, Bengaluru',
    joinedDate: '2026-08-18',
    searchesCount: 2,
    demandsCount: 0,
    savedItemsCount: 0,
    status: 'suspended'
  }
];

export const UsersManagementPage: React.FC = () => {
  const [usersList, setUsersList] = useState<MockUserItem[]>(INITIAL_USERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'suspended'>('all');

  const filteredUsers = usersList.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.phone.includes(searchQuery) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.area.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (filterStatus !== 'all' && u.status !== filterStatus) return false;
    return true;
  });

  const toggleUserStatus = (userId: string) => {
    setUsersList(prev => prev.map(u => {
      if (u.id === userId) {
        return {
          ...u,
          status: u.status === 'active' ? 'suspended' : 'active'
        };
      }
      return u;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <Users className="w-7 h-7 text-purple-400" />
              <span>Customer Account Management</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Inspect user discovery activity, local search volumes, demand requests, and manage account statuses
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 font-bold text-xs">
              {usersList.length} Total Registered Users
            </span>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <div className="w-full sm:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search user name, phone, area, email..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-purple-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => setFilterStatus('all')}
              className={`py-1.5 px-3.5 rounded-xl font-bold transition-all ${
                filterStatus === 'all' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Users ({usersList.length})
            </button>
            <button
              onClick={() => setFilterStatus('active')}
              className={`py-1.5 px-3.5 rounded-xl font-bold transition-all ${
                filterStatus === 'active' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Active ({usersList.filter(u => u.status === 'active').length})
            </button>
            <button
              onClick={() => setFilterStatus('suspended')}
              className={`py-1.5 px-3.5 rounded-xl font-bold transition-all ${
                filterStatus === 'suspended' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Suspended ({usersList.filter(u => u.status === 'suspended').length})
            </button>
          </div>
        </div>

        {/* Users Master Table */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-950/60 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                  <th className="py-4 px-4 sm:px-6">Customer Name</th>
                  <th className="py-4 px-3">Primary Area</th>
                  <th className="py-4 px-3">Contact</th>
                  <th className="py-4 px-3 text-center">Searches</th>
                  <th className="py-4 px-3 text-center">Demands Logged</th>
                  <th className="py-4 px-3 text-center">Status</th>
                  <th className="py-4 px-4 text-right">Moderation</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/80">
                {filteredUsers.map((userItem) => (
                  <tr key={userItem.id} className="hover:bg-slate-800/40 transition-colors">
                    
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-bold text-white text-sm">{userItem.name}</div>
                      <div className="text-slate-400 text-[10px]">ID: {userItem.id} • Joined: {userItem.joinedDate}</div>
                    </td>

                    <td className="py-4 px-3 text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="truncate max-w-[180px]">{userItem.area}</span>
                      </div>
                    </td>

                    <td className="py-4 px-3 text-slate-300">
                      <div>{userItem.phone}</div>
                      <div className="text-slate-500 text-[10px]">{userItem.email}</div>
                    </td>

                    <td className="py-4 px-3 text-center font-bold text-white">
                      {userItem.searchesCount}
                    </td>

                    <td className="py-4 px-3 text-center">
                      <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-bold text-[10px]">
                        {userItem.demandsCount} Demands
                      </span>
                    </td>

                    <td className="py-4 px-3 text-center">
                      {userItem.status === 'active' ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                          Active
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold text-[10px]">
                          Suspended
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => toggleUserStatus(userItem.id)}
                        className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors ${
                          userItem.status === 'active'
                            ? 'bg-rose-500/20 text-rose-300 hover:bg-rose-500/30'
                            : 'bg-emerald-600 text-white hover:bg-emerald-500'
                        }`}
                      >
                        {userItem.status === 'active' ? 'Suspend' : 'Reactivate'}
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};
