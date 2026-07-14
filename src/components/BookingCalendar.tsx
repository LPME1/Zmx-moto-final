import { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BookingCalendarProps {
  service: 'park' | 'future' | 'rent';
  onClose: () => void;
}

export default function BookingCalendar({ service, onClose }: BookingCalendarProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    bookingDate: '',
    bookingTime: '',
    duration: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const getDurationOptions = () => {
    switch (service) {
      case 'park':
        return ['1 heure', '2 heures'];
      case 'future':
        return ['2 heures'];
      case 'rent':
        return ['1 jour', '2 jours (weekend)', '7 jours (semaine)'];
      default:
        return [];
    }
  };

  const getServiceTitle = () => {
    switch (service) {
      case 'park':
        return 'ZMX PARK - Session libre';
      case 'future':
        return 'ZMX FUTURE - Coaching';
      case 'rent':
        return 'ZMX RENT - Location moto';
      default:
        return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const { error } = await supabase
        .from('bookings')
        .insert({
          service,
          customer_name: formData.customerName,
          customer_email: formData.customerEmail,
          customer_phone: formData.customerPhone,
          booking_date: formData.bookingDate,
          booking_time: formData.bookingTime,
          duration: formData.duration,
          notes: formData.notes,
          status: 'pending'
        });

      if (error) throw error;

      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      setSubmitError('Une erreur est survenue. Veuillez réessayer.');
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  };

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zmx-black/90 backdrop-blur-sm p-6">
        <div className="glass-effect border-2 border-zmx-gold max-w-md w-full p-8 text-center animate-fade-in">
          <div className="w-20 h-20 bg-zmx-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-zmx-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-display uppercase mb-4 text-zmx-gold">Réservation confirmée !</h3>
          <p className="text-lg text-zmx-gray mb-2">
            Merci {formData.customerName} pour votre réservation.
          </p>
          <p className="text-zmx-gray">
            Nous vous contactons sous 24h pour confirmer votre créneau.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zmx-black/90 backdrop-blur-sm p-6 overflow-y-auto">
      <div className="glass-effect border-2 border-zmx-gold max-w-2xl w-full my-8 animate-slide-up">
        <div className="p-6 border-b border-zmx-gold/30 flex justify-between items-center">
          <h2 className="text-3xl font-display uppercase text-zmx-gold">
            {getServiceTitle()}
          </h2>
          <button
            onClick={onClose}
            className="text-zmx-gray hover:text-zmx-gold transition"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold mb-2 text-zmx-gold">
                <User className="w-4 h-4" />
                NOM COMPLET *
              </label>
              <input
                type="text"
                required
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full bg-zmx-black/50 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none"
                placeholder="Jean Dupont"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold mb-2 text-zmx-gold">
                <Mail className="w-4 h-4" />
                EMAIL *
              </label>
              <input
                type="email"
                required
                value={formData.customerEmail}
                onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                className="w-full bg-zmx-black/50 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none"
                placeholder="jean.dupont@email.com"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-bold mb-2 text-zmx-gold">
              <Phone className="w-4 h-4" />
              TÉLÉPHONE *
            </label>
            <input
              type="tel"
              required
              value={formData.customerPhone}
              onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
              className="w-full bg-zmx-black/50 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none"
              placeholder="06 12 34 56 78"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold mb-2 text-zmx-gold">
                <Calendar className="w-4 h-4" />
                DATE *
              </label>
              <input
                type="date"
                required
                min={getMinDate()}
                value={formData.bookingDate}
                onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                className="w-full bg-zmx-black/50 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold mb-2 text-zmx-gold">
                <Clock className="w-4 h-4" />
                HORAIRE *
              </label>
              <select
                required
                value={formData.bookingTime}
                onChange={(e) => setFormData({ ...formData, bookingTime: e.target.value })}
                className="w-full bg-zmx-black/50 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none"
              >
                <option value="">Choisir un horaire</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-bold mb-2 text-zmx-gold">
              <Clock className="w-4 h-4" />
              DURÉE *
            </label>
            <select
              required
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full bg-zmx-black/50 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none"
            >
              <option value="">Choisir une durée</option>
              {getDurationOptions().map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-bold mb-2 text-zmx-gold">
              <MessageSquare className="w-4 h-4" />
              NOTES (optionnel)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
              className="w-full bg-zmx-black/50 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none resize-none"
              placeholder="Questions, demandes spéciales..."
            />
          </div>

          {submitError && (
            <div className="bg-red-500/10 border border-red-500 p-4 text-red-400">
              {submitError}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-zmx-gold/30 text-white px-6 py-4 font-bold uppercase hover:border-zmx-gold transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-zmx-gold text-zmx-black px-6 py-4 font-bold uppercase hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi...' : 'Confirmer la réservation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
